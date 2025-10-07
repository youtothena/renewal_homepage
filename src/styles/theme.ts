export const theme = {
    colors: {
      primary: '#3d6fac',
      secondary: '#ededed',
      text: {
        primary: '#333333',
        secondary: '#686868',
        white: '#ffffff',
      },
      background: {
        white: '#ffffff',
        gray: '#f5f5f5',
        dark: '#333333',
      },
      border: {
        light: '#dedcdd',
        dark: '#333333',
      },
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1200px',
    },
    spacing: (n: number) => `${n * 8}px`,
  }
  
  export type Theme = typeof theme