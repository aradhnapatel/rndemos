import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Screeens/Home';
import CustomDrawer from './Screeens/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: '#1B2939',
        position: 'absolute',
        top: 50,
        borderRadius: 10,
        bottom: 30,
        marginLeft: 10,
        width: '70%',
      }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
