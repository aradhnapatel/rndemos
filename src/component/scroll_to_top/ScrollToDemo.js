import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScrollToDemo = () => {
  return (
    <View style={styles.container}>
      <Text>Scroll To Demo</Text>
    </View>
  );
};

export default ScrollToDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
