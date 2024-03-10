import fs from "fs/promises";
import { compileTheme } from "./theme";

async function main() {
  const defaultTheme = await compileTheme();

  try {
    await fs.mkdir("./themes", { recursive: true });
    await fs.writeFile(
      "./themes/true-vibrant-xcode.json",
      JSON.stringify(defaultTheme, null, 2)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
