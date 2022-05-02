import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66ccff',
  },
  Text1head: {
    fontSize: 34,
    color: 'white',
    fontWeight: '700',
  },
  Imageuser: {
    padding: 10,
    height: 130,
    width: 150,
    resizeMode: 'contain',
  },
  Imagemap: {
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
    padding: 6,
    fontSize: 16,
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'black',
  },
  signuutext: {
    color: 'white',
  },
  loginsignupBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'orange',
  },
  logintext: {
    color: 'white',
  },
  login: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'blue',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
