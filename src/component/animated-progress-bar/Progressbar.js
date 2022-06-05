import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

const Progressbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress bar</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      />
      <AnimatedCircularProgress
        size={120}
        lineCap={'angle'}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        padding={10}
        renderCap={({center}) => (
          <Circle cx={center.x} cy={center.y} r="10" fill="blue" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Progressbar;
