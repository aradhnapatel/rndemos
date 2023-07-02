/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
// import { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Checkbox = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity
      style={{flex: 1, padding: 40, margin: 50}}
      onPress={handlePress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'black',
            marginRight: 8,
          }}>
          {isSelected && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: 'black',
                margin: 4,
              }}
            />
          )}
        </View>
        <Text>Select me</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
