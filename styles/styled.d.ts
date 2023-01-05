import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
      primary: {
          textColorBase: string;
          textDiceBase: string;
          cardBackgroundColor: string;
          backgroundColor: string;
      };
  }
}