export type PokemonType = 'bug'| 'dark'|'dragon'|'electric' | "fairy"| 'fight' | 'fire'|'flying'|'ghost'| 'grass' |"ground"| 'ice'|'normal'|'poison' | "psychic"| 'rock'|'steel'|'water';

export interface IPokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: [];
	forms: [];
	game_indices: [];
	held_items: [];
	moves: [];
	species: [];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
	stats: [];
	types: {
		slot: number;
		type: {
			name: PokemonType;
			url: string;
		};
	}[];
}