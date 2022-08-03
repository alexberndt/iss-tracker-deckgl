import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mainColor: {
      foreground: {
        primary: string;
        secondary: string;
        tertiary: string;
        onAccent: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      accent: {
        normal: string;
        hover: string;
        pressed: string;
        secondaryHover: string;
        secondaryPressed: string;
      };
    };
    statusColor: {
      error: string;
    };
    riskColor: {
      high: string;
      medium: string;
      low: string;
      minor: string;
    };
    typography: {
      fontSize: string;
      fontFamily: {
        primary: string;
        heading: string;
      };
      size: {
        base: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
      weight: {
        light: number;
        regular: number;
        medium: number;
      };
      lineHeight: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
