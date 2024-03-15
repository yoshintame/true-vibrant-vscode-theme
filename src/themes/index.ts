import { Theme } from "../types";
import { trueVibrantColors } from "./colors/true-vibrant";
import { xcodeTokens } from "./tokens/xcode";

export const themes: Theme[] = [
  {
    tokens: xcodeTokens,
    colors: trueVibrantColors,
  }
] as const;
