import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Chat = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigation.navigate('Home')}>
        Chat
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});

export default Chat;
