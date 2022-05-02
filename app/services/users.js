import {FlowUrl} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const users = {
  list: async () => {
    const token = await AsyncStorage.getItem('auth');
    return await FlowUrl.get('/users', {headers: {token: token}});
  },
};
