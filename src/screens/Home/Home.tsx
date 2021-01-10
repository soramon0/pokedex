import React, { useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalization } from '../../context/Localization';
import { HomeScreenProps } from '../../types/navigation.d';
import { validateSearch } from '../../utils/validation';
import useForm from '../../hooks/useForm';
import Box from '../../components/Box';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import PokemonCard from './PokemonCard';
import { usePokemons } from '../../context/Pokemon';

const HomeScreen: React.VFC<HomeScreenProps> = () => {
	const { t } = useLocalization();
	const [loading, setLoading] = useState(true);
	const { pokemons, fetchPokemons } = usePokemons();
	const scale = useRef(new Animated.Value(0)).current;
	const { values, handleBlur, handleChange, errors } = useForm(
		{ search: '' },
		validateSearch
	);

	useEffect(() => {
		fetchPokemons()
			.catch(console.log)
			.finally(() => {
				setLoading(false);

				Animated.sequence([
					Animated.timing(scale, {
						toValue: 1.08,
						duration: 800,
						useNativeDriver: true,
					}),
					Animated.timing(scale, {
						toValue: 1,
						duration: 400,
						useNativeDriver: true,
					}),
				]).start();
			});
	}, []);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Box flex={1} px='md' py='lg'>
				<StatusBar hidden />
				<Text fontWeight='700' fontSize={32} lineHeight={32}>
					{t('home.pokedex')}
				</Text>
				<Text mt='sm' fontSize={16} color='body' numberOfLines={2}>
					{t('home.subtitle')}
				</Text>

				<TextInput
					containerStyle={{ my: 'xl' }}
					placeholder={t('home.searchPlaceholder')}
					value={values.search}
					icon='search'
					iconSize={20}
					error={errors.search}
					onChangeText={handleChange('search')}
					onBlur={handleBlur('search')}
				/>

				{loading && <Text>{t('home.loading')}</Text>}

				<Animated.FlatList
					style={{ transform: [{ scale }] }}
					data={pokemons}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					bounces={false}
					keyExtractor={({ name, id }) => name + id}
					renderItem={({ item }) => <PokemonCard pokemon={item} />}
				/>
			</Box>
		</TouchableWithoutFeedback>
	);
};

export default HomeScreen;
