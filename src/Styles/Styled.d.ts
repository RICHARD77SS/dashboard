import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      pri: string,
      sec: string,
      bac: string,
      text: string
    }
  }
}

