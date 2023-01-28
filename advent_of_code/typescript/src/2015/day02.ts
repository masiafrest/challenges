import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2015, day: 2 })
  .then((res) => {
    const data = res.data.split("\n");
  })
  .catch((e) => console.error(e));