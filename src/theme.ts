export async function compileTheme() {
  const colorsModule = await import("./colors/true-vibrant");
  const { themeColors: colors, name: themeName } = colorsModule;

  const tokensModule = await import("./tokens/xcode");
  const { themeTokens: tokenColors, name: tokensName } = tokensModule;

  return {
    name: `${themeName} (${tokensName})`,
    colors,
    tokenColors,
  };
}
