import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// TODO(): Add routes
export type RootStackParamList = {
	Home: undefined;
};

// TODO(): Add routes
export type HomeStackParamList = {
	Home: undefined;
};

export type HomeScreenProps = {
	navigation: StackNavigationProp<HomeStackParamList, 'Home'>;
	route: RouteProp<HomeStackParamList, 'Home'>;
};
