import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#E94730',
    flex: 1,
  },

  txtWelcomeTag: {
    fontSize: 20,
    color: '#E94730',
    flex: 1,

  },

  txtInputPhoneNum: {
    fontSize: 15,
    flex: 1,
    color: '#000000',

  },

  input: {
    borderColor: '#E94730',
    color: '#E94730',
    width: Dimensions.get('window').width - 100,
    height: 10,
    flex: 1,
    margin: 12,
    borderWidth: 1,
  },

  btnLogin: {
    flex: 5,
  },
});

