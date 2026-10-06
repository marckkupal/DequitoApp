import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from './types';

const USERS_KEY = 'vicinia_users';
let warned = false;

export const saveUsers = async (list: User[]) => {
  try {
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(list));
  } catch (e) {
    if (!warned) {
      warned = true;
      Alert.alert('Storage problem', 'Your account could not be saved on this device.');
    }
  }
};
export const loadUsers = async (): Promise<User[] | null> => {
  try {
    const saved = await AsyncStorage.getItem(USERS_KEY);
    const parsed = saved ? JSON.parse(saved) : null;
    if (!Array.isArray(parsed)) return null;
    return parsed.filter((u) => u && typeof u.email === 'string' && typeof u.password === 'string' && typeof u.name === 'string');
  } catch {
    return null;
  }
};
