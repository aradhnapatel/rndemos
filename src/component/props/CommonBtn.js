/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';

const CommonBtn = props => {
  const [name, setName] = useState('hii');

  const handelPress = () => {
    setName('hello');
  };

  return (
    <TouchableOpacity
      onPress={() => handelPress()}
      style={{
        height: 50,
        marginHorizontal: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
      }}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default CommonBtn;
