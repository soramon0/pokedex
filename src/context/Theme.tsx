import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as RestyleProvider } from '@shopify/restyle';
import theme, { Theme, darkTheme } from '../constants/theme';

type Context = Theme & {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<Context | undefined>(undefined);

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
}

const ThemeProvider: React.FC = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const value = useMemo(
		() => ({
			...theme,
			darkMode,
			setDarkMode,
		}),
		[darkMode]
	);

	return (
		<ThemeContext.Provider value={value}>
			<RestyleProvider theme={darkMode ? darkTheme : theme}>
				{children}
			</RestyleProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
