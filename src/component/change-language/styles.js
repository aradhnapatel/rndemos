import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 30,
  },
  modelView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: 300,
    width: 300,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
});
