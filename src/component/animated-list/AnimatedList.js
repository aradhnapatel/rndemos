import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageStore,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RNAnimated from 'react-native-animated-component';

const data = [
  {
    id: 1,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 2,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 3,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 4,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 5,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 6,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 7,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
  {
    id: 8,
    image: require('../../images/user.png'),
    description: 'This is Nice',
  },
];

const AnimatedList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{textAlign: 'center'}}>AnimatedList</Text>
        <RNAnimated
          appearFrom="left"
          animationDuration={1800}
          style={{marginHorizontal: 10, marginVertical: 40}}>
          {data.map(item => {
            return (
              <View style={styles.card}>
                <Image
                  source={item.image}
                  style={{height: 80, width: 80}}
                />
                <View>
                  <Text>{item.id}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </RNAnimated>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    margin: 5,
    padding: 30,
    shadowOpacity: 0.45,
    shadowRadius: 3,
    shadowOffset: {height: 0, width: 0},
    elevation: 2,
  },
});

export default AnimatedList;
