import { getInputChallenge } from "../services/adventofcode";

getInputChallenge({ year: 2022, day: 1 })
  .then((res) => {
    // solvePuzzle(res.data)
    const data : string[] = res.data.split("\n");
    const result: number[] = [];
    let sum = 0;
    data.forEach((e: string) => {
      if (e.trim() === "") {
        result.push(sum);
        sum = 0;
        return;
      }
      sum += Number(e);
    });

    result.sort((a, b) => Number(b) - Number(a));
    const first = result[0];
    const total = first + result[1] + result[2];
    console.log({ first, total });
  })
  .catch((err) => console.log({ err }));


  function solvePuzzle(input: string) {
    const elves = input.split('\n\n'); // Split input into an array of strings, one string per Elf
    let maxCalories = 0;
    let maxElf = "";

    for (const elf of elves) {
        const items = elf.split('\n').filter(i => i); // Split each Elf's inventory into an array of items and remove empty strings
        const calories = items.map(i => parseInt(i, 10)).reduce((a, b) => a + b, 0); // Parse each item as a number and sum them up
        if (calories > maxCalories) {
            maxCalories = calories;
            maxElf = elf;
        }
    }

    console.log(`The Elf carrying the most Calories is: ${maxElf}`);
    console.log(`Total Calories: ${maxCalories}`);
}

