import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
    paddingTop: 40,
  },
  search: {
    paddingHorizontal: 14,
    backgroundColor: '#fefefe'
  },
  buttomBack: {
    width: 52,
    transform: [{ translateX: -14 }],
    backgroundColor: 'red'
  },
  cmSearch: {
    flexDirection: 'row',
    marginVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  cmUserAddress: {
    backgroundColor: '#fefefe',
    padding: 14,
    marginTop: 14
  },
  cmUserAddress1: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  category: {
    flex: 1,
    paddingTop: 14,
    marginVertical: 14,
    backgroundColor: '#fefefe',
  }
});
