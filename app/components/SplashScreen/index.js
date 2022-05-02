import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(async () => {
    const token = await AsyncStorage.getItem('auth');
    if (token) {
      setTimeout(() => {
        navigation.navigate('locate');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.navigate('login');
      }, 3000);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={{width: 290, height: 140, resizeMode: 'contain', marginTop: 1}}
        source={require('../../assets/maplogo.png')}
      />
      <Text style={styles.txtbody}>Your kids will be Safe by one tap.</Text>

      <Text style={styles.txtbody2}>Powered by...</Text>
      <Image
        style={{width: 220, height: 100}}
        source={require('../../assets/codeboardlogo.jpg')}
      />
    </View>
  );
};

export default SplashScreen;
