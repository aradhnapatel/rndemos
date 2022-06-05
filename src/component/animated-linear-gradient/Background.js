import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';

const Background = () => {
  return (
    <AnimatedLinearGradient customColors={presetColors.instagram} speed={2000}>
      <View style={styles.container}>
        <Text style={styles.text}>Animated Linear Gradient</Text>
      </View>
    </AnimatedLinearGradient>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
});
