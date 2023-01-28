import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 4 })
  .then((res) => {
    const data: string[] = res.data.split("\n");
    // const data = [
    //   "2-4,6-8",
    //   "2-3,4-5",
    //   "5-7,7-9",
    //   "2-8,3-7",
    //   "6-6,4-6",
    //   "2-6,4-8",
    // ];

    let sum = 0;
    let sum2 = 0;
    data.forEach((e: string) => {
      if (e) {
        const [first, second] = e.split(",");
        const firstRange = range(
          Number(extractNumber(first)[0]),
          Number(extractNumber(first)[1])
        );
        const secondRange = range(
          Number(extractNumber(second)[0]),
          Number(extractNumber(second)[1])
        );
        if (firstRange.includes(secondRange[0]) || secondRange.includes(firstRange[0])) {
          sum2 += 1;
        }
        if (firstRange.length >= secondRange.length) {
          if (isInRange(firstRange, secondRange)) {
            sum += 1;
          }
          return;
        }
        if (isInRange(secondRange, firstRange)) {
          sum += 1;
        }
      }
    });
    console.log({ sum, sum2 });
  })
  .catch((err) => console.log({ err }));

function isInRange(fArr: number[], sArr: number[]) {
  return fArr.includes(sArr[0]) && fArr.includes(sArr[sArr.length - 1]);
}

function range(init: number, end: number) {
  const res: number[] = [];
  for (let i = init; init <= end; i++) {
    if (i > end) {
      break;
    }
    res.push(i);
  }
  return res;
}

function extractNumber(num: string) {
  return num.split("-");
}
