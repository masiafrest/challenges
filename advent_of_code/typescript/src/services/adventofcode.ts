import axios from "axios";
import dotenv from "dotenv";
import cachedFile from "../utils/cachedFile";
dotenv.config();

const sessionKey = process.env.AOC_KEY;

export const getInputChallenge = ({
  year,
  day,
}: {
  year: number;
  day: number;
}) => {
  // cachedFile({year: 2015, day:1})
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  return axios
    .get(url, { headers: { cookie: `session=${sessionKey}` } })
};
