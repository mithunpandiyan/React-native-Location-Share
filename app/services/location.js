import {FlowUrl} from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Location = {
  location: async ({userId, userData}, location) => {
    const token = await AsyncStorage.getItem('auth');
    const locationdata = {
      from: userId,
      to: userData.id,
      lattitude: location.latitude,
      logititude: location.longitude,
    };
    return await FlowUrl.post('/location', locationdata, {
      headers: {token: token},
    });
  },
};

export const getLocations = {
  locations: async id => {
    const token = await AsyncStorage.getItem('auth');
    return await FlowUrl.get(`/locations/${id}`, {headers: {token: token}});
  },
};
