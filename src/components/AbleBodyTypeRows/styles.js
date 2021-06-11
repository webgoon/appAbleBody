import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: -10,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
    marginLeft: 10,
  },
  rightContainer: {
    width: 100,
    marginLeft: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 3,
  },
});

export default styles;
