import { DefaultTheme } from "styled-components";
import { breakpoints } from "./breakpoints";

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: "#0F52BA",
        background: "#F9F9F9",
        white: "#FFFFFF",
        black: "#000000",
        gray: {
            light: "#373737",
            dark: "#EEEEEE",
        },
        text: {
            light: "#FFFFFF",
            dark: "#2C2C2C",
        },
    },
};
const theme = { ...defaultTheme, ...breakpoints };

export { theme };