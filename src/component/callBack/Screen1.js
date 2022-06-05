import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const [name, setName] = useState();
  const navigation = useNavigation();

  const onNext = () => {
    navigation.navigate('screen2', {
      userName: name,
      CallbackName: nm => {
        setName(nm);
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={name}
        placeholder="Enter your Name"
        onChangeText={nm => setName(nm)}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.next} onPress={() => onNext()}>
        <Text>Go Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  next: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'blue',
  },
  textInput: {
    borderBottomWidth: 1,
    width: '50%',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
