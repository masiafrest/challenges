import fs from "fs";
import path from "path";

export default function cachedFile({
  year,
  day,
}: {
  year: number;
  day: number;
}) {
  const folderPath = path.normalize(`./${year}/puzzle_input`)
  const filename= (`day${day}.txt`);
  if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath)
    console.log('folder created')
  }

  fs.readFile(folderPath, "utf-8", (err, data) => {
    if (err) {
      console.log({ err });
      return;
    }
    console.log({ data });
  });
}
