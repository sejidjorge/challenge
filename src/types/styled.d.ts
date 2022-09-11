import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            background: string;
            white: string;
            black: string;
            gray: {
                light: string;
                dark: string;
            };
            text: {
                light: string;
                dark: string;
            };
        };
    }
}