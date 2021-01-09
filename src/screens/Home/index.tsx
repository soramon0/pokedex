import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import { useTheme } from '../../context/Theme';

const Stack = createStackNavigator();

function HomeStack() {
	const { darkMode, colors } = useTheme();

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: darkMode
						? colors['mainForeground']
						: colors['mainBackground'],
				},
				headerTintColor: darkMode
					? colors['mainBackground']
					: colors['mainForeground'],
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
		</Stack.Navigator>
	);
}

export default HomeStack;
