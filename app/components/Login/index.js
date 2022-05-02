import React, {useState} from 'react';
import {TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner} from 'react-native-loading-spinner-overlay';
import {login} from '../../services/auth.js';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrorText] = useState('');

  const loginAuth = () => {
    setErrorText('');
    if (!email) {
      setErrorText('Please fill Email!');
      return;
    } else if (!password) {
      setErrorText('Please fill Password!');
    } else {
      var regexemail = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const checkEmail = regexemail.test(email);
      if (!checkEmail) {
        setErrorText('Invalid email');
        return;
      }
    }
    login
      .loginauth({email, password})
      .then(res => {
        AsyncStorage.setItem('auth', res.data.token);
        AsyncStorage.setItem('user', res.data.user.id);
        navigation.navigate('locate');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.Imageuser}
          source={require('../../assets/user.png')}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          returnKeyType="next"
          placeholderTextColor="black"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      {errortext != '' ? (
        <Text style={styles.errorTextStyle}>{errortext}</Text>
      ) : null}
      <TouchableOpacity style={styles.loginBtn} onPress={loginAuth}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginsignupBtn}
        onPress={() => navigation.navigate('register')}>
        <Text style={styles.signuutext} activeOpacity={0.5}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
