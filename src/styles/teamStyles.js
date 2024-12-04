import { StyleSheet } from 'react-native';

const teamStyles = StyleSheet.create({
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 25,
    width: '90%',
    borderColor: '#1e90ff',
    borderWidth: 2,
  },
  teamName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e90ff',
    textShadowColor: '#a9a9a9',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  score: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ff4500',
    marginVertical: 15,
    textShadowColor: '#a9a9a9',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 15,
  },
});

export default teamStyles;
