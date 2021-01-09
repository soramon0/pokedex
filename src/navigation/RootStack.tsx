import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from '../screens/Home';
import { RootStackParamList } from '../types/navigation.d';

const Stack = createStackNavigator<RootStackParamList>();

interface Props {}

function RootStack({}: Props) {
	const hideScreen = { headerShown: false };

	return (
		<Stack.Navigator>
			<Stack.Screen options={hideScreen} name='Home' component={HomeStack} />
		</Stack.Navigator>
	);
}

export default RootStack;
