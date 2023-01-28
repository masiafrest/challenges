import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 3 })
  .then((res) => {
    const data: string[] = res.data.split("\n");
    // const data = [
    //   "vJrwpWtwJgWrhcsFMMfFFhFp",
    //   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    //   "PmmdzqPrVvPwwTWBwg",
    //   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    //   "ttgJtRGJQctTZtZT",
    //   "CrZsJsPPZsGzwwsLwLmpwMDw",
    // ];
    let partOneSum = 0;
    let partTwoSum = 0;
    data.forEach((e: string, idx, arr) => {
      if (e) {
        const len = e.length;
        const firstHalf = e.slice(0, len / 2);
        const secondHalf = e.slice(len / 2);
        for (const c of firstHalf) {
          if (/[a-zA-Z]/.test(c) && secondHalf.includes(c)) {
            partOneSum += getCharCode(c);
            break;
          }
        }
        if ((idx + 1) % 3 == 0) {
          for (const c of e) {
            if (
              /[a-zA-Z]/.test(c) &&
              idx >= 2 &&
              arr[idx - 1].includes(c) &&
              arr[idx - 2].includes(c)
            ) {
              partTwoSum += getCharCode(c);
              break;
            }
          }
        }
      }
    });
    console.log({ partOneSum, partTwoSum });
  })
  .catch((e) => console.error(e));

const getCharCode = (c: string) => {
  let charCodeAt = c.charCodeAt(0);
  if (c === c.toUpperCase()) {
    charCodeAt -= 38;
  } else {
    charCodeAt -= 96;
  }
  return charCodeAt;
};
