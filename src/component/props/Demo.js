import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import CommonBtn from './CommonBtn';

const Demo = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text style={{textAlign: 'center'}}>demo</Text>
      </TouchableOpacity>

      <CommonBtn title={'common'} press={props.handelPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Demo;
