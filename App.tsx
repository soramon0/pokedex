import 'react-native-gesture-handler';
import React from 'react';
import LocalizationProvider from './src/context/Localization';
import ThemeProvider from './src/context/Theme';
import Scafold from './src/screens';

export default function App() {
	return (
		<LocalizationProvider>
			<ThemeProvider>
				<Scafold />
			</ThemeProvider>
		</LocalizationProvider>
	);
}
