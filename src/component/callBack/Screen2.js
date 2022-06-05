import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Screen2 = () => {
  const route = useRoute();

  const [name2, setName2] = useState();
  const navigation = useNavigation();

  const {CallbackName, userName} = route.params;

  const onPrev = () => {
    CallbackName(name2);
    navigation.navigate('screen1');
  };

  useEffect(() => {
    setName2(userName);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={name2}
        placeholder="Enter your Name"
        onChangeText={nm => setName2(nm)}
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.next} onPress={() => onPrev()}>
        <Text>Go Previous</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    width: '50%',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
