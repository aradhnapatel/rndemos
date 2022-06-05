import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen2 from './Screen2';
import Screen1 from './Screen1';

const Stack = createStackNavigator();

const Screen3 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screen3;
