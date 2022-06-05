import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const LottiViewDemo = () => {
  return (
    <View>
      <Text>LottiView</Text>
      <LottieView source={require('../../images/giff.gif')} />
    </View>
  );
};

export default LottiViewDemo;
