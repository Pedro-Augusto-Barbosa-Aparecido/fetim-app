import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      100: "#E1E1E6",
      200: "#D9D9D9",
      600: "#222222",
      700: "#454545",
      800: "#171717",
      900: "#121214",
    },
    red: {
      500: "#F75A68",
    },
    green: {
      500: "#00B377",
    },
  },
  fonts: {
    heading: "Inter_700Bold",
    body: "Roboto_400Regular",
    mono: "Roboto_500Medium",
  },
});
