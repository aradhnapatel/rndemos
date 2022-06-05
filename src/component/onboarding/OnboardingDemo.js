/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Next = ({isLight, ...props}) => (
  <TouchableOpacity {...props}>
    <Text style={{color: 'blue', fontWeight: '400', fontSize: 20}}> Next </Text>
  </TouchableOpacity>
);

const OnboardingDemo = () => {
  return (
    <View style={{flex: 1}}>
      <Onboarding
        showSkip={false}
        NextButtonComponent={Next}
        bottomBarColor="#eeee"
        showDone={false}
        titleStyles={{fontWeight: 'bold', marginTop: -50}}
        subTitleStyles={{color: 'grey', marginTop: -10}}
        pages={[
          {
            backgroundColor: 'lightgrey',
            image: (
              <Image
                source={require('../../../src/images/1.jpeg')}
                style={styles.image}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#e4e4e4',
            image: (
              <Image
                source={require('../../../src/images/2.jpeg')}
                style={styles.image}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#f6f6f6',
            image: (
              <Image
                source={require('../../../src/images/3.jpeg')}
                style={styles.image}
              />
            ),
            title: 'Onboarding',
            subtitle: (
              <TouchableOpacity style={styles.btn}>
                <Text>Next</Text>
              </TouchableOpacity>
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 340,
    width: 340,
    borderRadius: 340 / 2,
    resizeMode: 'cover',
  },
  btn: {
    backgroundColor: 'pink',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default OnboardingDemo;
