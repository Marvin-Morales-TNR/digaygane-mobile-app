import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveSecureData(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
}
 
export async function getSecuredValue(key: string) {
    const res = await SecureStore.getItemAsync(key);
    return res;
}

export const storeDataAsync = async (key: string, value: string) => {
    await AsyncStorage.setItem(key, value);
};

export const readDataAsync = async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value;
};