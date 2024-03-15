export interface ThemeTokens {
  name: string;
  tokens: Token[];
}

export interface Token {
  scope: string[] | string;
  settings: Settings;
}

export interface Settings {
  foreground: string;
  fontStyle?: string;
}

export interface ThemeColors {
  name: string;
  colors: { [key: string]: string };
}

export interface Theme {
  colors: ThemeColors;
  tokens: ThemeTokens;
}
