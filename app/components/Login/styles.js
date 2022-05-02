import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66ccff',
  },
  Imageuser: {
    padding: 10,
    height: 130,
    width: 150,
    resizeMode: 'contain',
  },
  TextInput: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
  },
  loginsignupBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'orange',
  },
  signuutext: {
    color: 'white',
  },
  loginText: {
    color: 'white',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'black',
    marginTop: 14,
  },
  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
