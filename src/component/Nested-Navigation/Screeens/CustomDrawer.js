/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomDrawer = props => {
  const data = ['home', 'profile', 'chat', 'notification'];
  return (
    <View style={{flex: 1, padding: 40}}>
      <View
        style={{
          backgroundColor: '#eee',
          height: 100,
          width: 100,
          borderRadius: 150 / 2,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{margin: 10, borderRadius: 5}}>
              <Text style={{color: 'white', textAlign: 'left'}}>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomDrawer;
