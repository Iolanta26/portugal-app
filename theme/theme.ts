export const colors = {
  lightTextColor: "#FFF7EB",

  darkTextColor: "#212121",

  darkBluePalette: "#296eb4",

  greenPalette: "#20bf55",

  bluePalette: "#1789fc",

  orangePalette: "#fdb833",

  brownPalette: "#b1740f",

  beigePallete: "#ffd07b",
} as const;
// export type ColorKeys = keyof typeof colors;
// export type ColorValues = typeof colors[ColorKeys];

export type Theme = {
  colors: Record<keyof typeof colors, string>;
};

export const theme: Theme = {
  colors,
};
