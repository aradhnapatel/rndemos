import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from './Screeens/Chat';
import Profile from './Screeens/Profile';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={DrawerNav} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
