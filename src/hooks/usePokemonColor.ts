import { useTheme } from '../context/Theme';
import { PokemonType } from '../types/models'

function usePokemonColor(type: PokemonType) {
	const { colors } = useTheme()

	switch (type.toLowerCase()) {
		case 'bug':
			return colors['bug']

		case 'dark':
			return colors['dark']

		case 'dragon':
			return colors['dragon']

		case 'electric':
			return colors['electric']
		
		case 'fight':
			return colors['fight']

		case 'fire':
			return colors['fire']

		case 'flying':
			return colors['flying']

		case 'ghost':
			return colors['ghost']

		case 'grass':
			return colors['grass']

		case 'ground':
			return colors['ground']

		case 'ice':
			return colors['ice']

		case 'normal':
			return colors['normal']
		
		case 'poison':
			return colors['poison']

		case 'psychic':
			return colors['psychic']

		case 'rock':
			return colors['rock']

		case 'steel':
			return colors['steel']

		case 'water':
			return colors['water']
	
		default:
			return colors['fire']
	}
}

export default usePokemonColor