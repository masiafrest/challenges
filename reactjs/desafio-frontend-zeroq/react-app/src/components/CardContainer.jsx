import Card from "./Card";
import GridContainer from "./GridContainer";
import CardSkeletons from "./CardSkeletons";

import { useGetDataQuery } from "../redux/services/desafioFrontEnd";

export default function CardContainer({ searchValue }) {
  const { data, isLoading, isFetching } = useGetDataQuery("", {
    pollingInterval: 60000,
  });

  const dataToRenderBySearch = data?.filter((e) =>
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <GridContainer>
      {isLoading || isFetching ? (
        <CardSkeletons skeletons={10} />
      ) : (
        dataToRenderBySearch.map((e) => {
          const waiting = Object.values(e.lines).reduce(
            (acc, curr) => curr.waiting + acc,
            0
          );

          const elapsedAcc = Object.values(e.lines).reduce(
            (acc, curr) => acc + curr.elapsed,
            0
          );
          const elapsedPromedio = elapsedAcc / Object.values(e.lines).length;
          const elapsed = new Date(elapsedPromedio * 1000)
            .toISOString()
            .substring(14, 19);

          return (
            <Card
              key={e.name}
              name={e.name}
              online={e.online}
              waiting={waiting}
              elapsed={elapsed}
            />
          );
        })
      )}
    </GridContainer>
  );
}
