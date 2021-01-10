import React, { createContext, useContext, useMemo, useState } from 'react';
import { IPokemon } from '../types/models';
import http from '../utils/http';

type Context = {
	pokemons: IPokemon[];
	setPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
	fetchPokemons: () => Promise<void>;
};

type PokemonListResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: { name: string; url: string }[];
};

const PokemonsContext = createContext<Context | undefined>(undefined);

export function usePokemons() {
	const context = useContext(PokemonsContext);

	if (context === undefined) {
		throw new Error('usePokemons must be used within a PokemonsProvider');
	}

	return context;
}

const PokemonsProvider: React.FC = ({ children }) => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);

	const value = useMemo(
		() => ({
			pokemons,
			setPokemons,
			fetchPokemons: async () => {
				if (pokemons.length > 0) return;

				try {
					const { data: listRes } = await http.get<PokemonListResponse>(
						`/pokemon?limit=20`
					);
					const requests = listRes.results.map(({ name }) =>
						http.get<IPokemon>(`/pokemon/${name}`)
					);

					const pokemons: IPokemon[] = (await Promise.all(requests)).map(
						({ data }) => data
					);
					setPokemons(pokemons);
				} catch (error) {
					throw error;
				}
			},
		}),
		[pokemons]
	);

	return (
		<PokemonsContext.Provider value={value}>
			{children}
		</PokemonsContext.Provider>
	);
};

export default PokemonsProvider;
