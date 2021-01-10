import React, { useEffect } from 'react';
import Box from '../../components/Box';
import Image from '../../components/Image';
import Text from '../../components/Text';
import usePokemonColor from '../../hooks/usePokemonColor';
import { IPokemon } from '../../types/models';
import { cacheImages } from '../../utils/cache';

interface Props {
	pokemon: IPokemon;
}

function PokemonCard({ pokemon }: Props) {
	const color = usePokemonColor(pokemon.types[0].type.name);
	const image = pokemon.sprites.other['official-artwork'].front_default;

	useEffect(() => {
		(async () => await cacheImages([image]))();
	}, [image]);

	return (
		<Box mt='base' px='xs' flex={1}>
			<Box
				style={{ backgroundColor: color }}
				flex={1}
				py='md'
				px='base'
				borderRadius={20}
			>
				<Box
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Text
						textTransform='capitalize'
						fontSize={16}
						fontWeight='700'
						color='mainBackground'
					>
						{pokemon.name}
					</Text>
					<Text fontSize={16} fontWeight='700' color='typeTag'>
						#{pokemon.id < 10 ? '00' : '0'}
						{pokemon.id}
					</Text>
				</Box>

				<Box
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Box flex={1} mt='sm'>
						{pokemon.types.map(({ type }) => (
							<Box
								key={type.name}
								bg='typeTag'
								py='xs'
								mb='xs'
								justifyContent='center'
								alignItems='center'
								borderRadius={18}
							>
								<Text
									color='mainBackground'
									textTransform='capitalize'
									fontSize={15}
								>
									{type.name}
								</Text>
							</Box>
						))}
					</Box>

					<Image
						flex={1}
						height={90}
						resizeMode='contain'
						source={{ uri: image }}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default PokemonCard;
