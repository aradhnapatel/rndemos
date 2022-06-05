import React from 'react';

import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabDemo = () => {
  const tabs = [
    {
      name: 'Home',
      activeIcon: (
        <Ionicons name="chatbubbles-outline" color={'#fff'} size={25} />
      ),
      inactiveIcon: (
        <Ionicons name="chatbubbles-outline" color="#000000" size={25} />
      ),
    },
    {
      name: 'list',
      activeIcon: (
        <Ionicons name="chatbubbles-outline" color={'#fff'} size={25} />
      ),
      inactiveIcon: (
        <Ionicons name="chatbubbles-outline" color="#000000" size={25} />
      ),
    },
    {
      name: 'camera',
      activeIcon: (
        <Ionicons name="chatbubbles-outline" color={'#fff'} size={25} />
      ),
      inactiveIcon: (
        <Ionicons name="chatbubbles-outline" color="#000000" size={25} />
      ),
    },
  ];
  return (
    <Tabbar
      tabs={tabs}
      tabBarContainerBackground="#EFEFEF"
      tabBarBackground="#fff"
      activeTabBackground="#FFC069"
      containerWidth={350}
      containerTopRightRadius={10}
      containerTopLeftRadius={10}
      containerBottomLeftRadius={10}
      containerBottomRightRadius={10}
      containerBottomSpace={20}
      labelStyle={{color: '#4d4d4d', fontWeight: '600', fontSize: 11}}
      onTabChange={() => console.log('Tab changed')}
    />
  );
};

export default TabDemo;
