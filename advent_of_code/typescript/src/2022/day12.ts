import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 7 })
  .then((res) => {
    const data : string[] = res.data.split("\n");
  })
  .catch((err) => console.log({ err }));