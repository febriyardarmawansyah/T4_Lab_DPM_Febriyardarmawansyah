import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    transition: 'transform 0.2s',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonPressed: {
    transform: [{ scale: 0.9 }],
  },
});

export default buttonStyles;
