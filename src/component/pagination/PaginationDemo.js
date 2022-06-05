import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaginationDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>pagination demo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default PaginationDemo;
