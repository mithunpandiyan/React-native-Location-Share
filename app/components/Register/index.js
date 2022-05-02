import React, {useState, useRef} from 'react';
import {TextInput, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {register} from '../../services/auth';

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrorText] = useState('');

  const handleSubmitButton = () => {
    setErrorText('');
    if (!userName) {
      setErrorText('Please fill Name');
      return;
    } else if (!email) {
      setErrorText('Please fill Email');
      return;
    } else if (!password) {
      setErrorText('Please fill Password');
      return;
    } else {
      var regexemail = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const checkEmail = regexemail.test(email);
      if (!checkEmail) {
        setErrorText('Invalid email');
        return;
      }
      register
        .registerauth({email, userName, password})
        .then(res => {
          navigation.navigate('login');
        })
        .catch(err => {
          console.log(err);
          setErrorText('Server Error');
        });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.Imagemap}
          source={require('../../assets/map.png.png')}
        />
      </View>
      <View>
        <Text style={styles.Text1head}>Create an account!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name"
          autoCapitalize="none"
          returnKeyType="next"
          placeholderTextColor="black"
          value={userName}
          onChangeText={userName => setUserName(userName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="black"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          autoCapitalize="none"
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
      <TouchableOpacity
        style={styles.loginsignupBtn}
        onPress={handleSubmitButton}>
        <Text style={styles.signuutext} activeOpacity={0.5}>
          Sign up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
