import { useEffect, useRef, useReducer } from "react";

export default function useFetch(url) {
  const cache = useRef({});
  const cancelRequest = useRef(false);

  const initialState = {
    data: [],
    status: "idle",
    error: null,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const datas = await response.json();
          const orderedDatasByOnline = datas.sort((data) =>
            data.online ? -1 : 1
          );
          cache.current[url] = orderedDatasByOnline;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest.current) return;
          dispatch({ type: "FETCH_ERROR", payload: error });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}
