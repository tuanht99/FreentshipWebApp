import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 0,
    padding: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  contentRight: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  partner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginStart: 8,
  },
});
