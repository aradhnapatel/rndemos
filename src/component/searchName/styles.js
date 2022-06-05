import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  search: {
    borderWidth: 1,
    padding: 20,
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstLetter:{
  fontSize:20,
  fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    margin: 10,
    paddingBottom: 10,
  },
  name: {
    marginLeft: 20,
    fontSize: 15,
  },
  subName: {
    marginLeft: 20,
    fontSize: 12,
    color: 'grey',
    marginTop: 2,
  },
});
