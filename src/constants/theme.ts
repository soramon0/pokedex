import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#0B0B0B',
	white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
  },
  spacing: {
    none: 0,
    xxs: 2,
		xs: 4,
		sm: 8,
		base: 12,
    md: 16,
		lg: 20,
		xl: 24,
		xxl: 40,
	},
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'mainForeground',
    },
  },
  
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
})

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
  },
};

export type Theme = typeof theme;
export default theme;