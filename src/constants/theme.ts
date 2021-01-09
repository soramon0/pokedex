import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  
  lighterGray: '#E0E0E0',
  lightGray: '#767678',
  gray: 'rgba(242,242,242, 0.38)',

  red: '#e63e2c'
};

const pokemonColors = {
  bug: '#9DC130',
  dark: '#5F606D',
  dragon: '#0773C7',
  electric: '#EDD53F',
  fairy: '#EF97E6',
  fight: '#D94256',
  fire: '#F8A54F',
  flying: '#9BB4E8',
  ghost: '#6970C5',
  grass: '#5DBE62',
  ground: '#D78555',
  ice: '#7ED4C9',
  normal: '#9A9DA1',
  poison: '#B563CE',
  psychic: '#F87C7A',
  rock: '#CEC18C',
  steel: '#5596A4',
  water: '#559EDF',
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    body: palette.lightGray,
    inputBox: palette.lighterGray,
    textError: palette.red,
    typeTag: palette.gray,
    ...pokemonColors,
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
    textError: {
      fontSize: 12,
			color: 'textError',
    }
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