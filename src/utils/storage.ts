import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		// TODO(): send this to some error reporting software
		console.log(error);
	}
};