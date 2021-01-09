import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import { useLocalization } from '../../context/Localization';
import { useTheme } from '../../context/Theme';
import { HomeScreenProps } from '../../types/navigation.d';
import Box from '../../components/Box';
import Text from '../../components/Text';

const HomeScreen: React.VFC<HomeScreenProps> = () => {
	const { t } = useLocalization();
	const { darkMode, setDarkMode } = useTheme();

	return (
		<Box flex={1} pt='md' px='sm' bg='mainBackground'>
			<Text variant='body'>{t('home.welcome')}</Text>

			<Switch
				value={darkMode}
				onValueChange={(value: boolean) => setDarkMode(value)}
			/>
		</Box>
	);
};

export default HomeScreen;
