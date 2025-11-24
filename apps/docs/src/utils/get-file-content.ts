import fs from "node:fs";
import path from "node:path";

export function getFileContent(filePath: string) {
  try {
    const data = fs.readFileSync(path.join(process.cwd(), filePath), {
      encoding: "utf8"
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
