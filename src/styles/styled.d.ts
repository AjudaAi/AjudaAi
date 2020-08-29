import 'styled-components/native';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            sideBarColor: string;
            gradientBackgroundColor: Array<string>
            
        }
    }
}