import { error } from "console";
import fs from "fs/promises";
import { themes } from "./themes";
import { toKebabCase } from "./utils";

async function main() {
  try {
    await fs.mkdir("./themes", { recursive: true });
  } catch {
    console.error(error);
    process.exit(1);
  }

  for (const theme of themes) {
    try {
      const fileName = toKebabCase(`${theme.colors.name}-${theme.tokens.name}`);
      const path = `./themes/${fileName}.json`;

      const themeCompiled = {
        name: `${theme.colors.name} (${theme.tokens.name})`,
        colors: theme.colors.colors,
        tokenColors: theme.tokens.tokens,
      };

      console.log(path);

      await fs.writeFile(path, JSON.stringify(themeCompiled, null, 2));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

main();
