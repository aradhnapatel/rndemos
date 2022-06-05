import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import ActivityRings from 'react-native-activity-rings';

const ChartDemo = () => {
  const activityData = [
    {
      value: 0.8, // ring will use color from theme
    },
    {
      label: 'ACTIVITY',
      value: 0.6,
      color: '#cb5f18',
    },
    {
      label: 'RINGS',
      value: 0.2,
      color: '#86040f',
      backgroundColor: '#cccccc',
    },
  ];

  const activityConfig = {
    width: 200,
    height: 200,
  };

  return (
    <SafeAreaView>
      <Text>chart</Text>

      <ActivityRings data={activityData} config={activityConfig} legend={true}  theme={"light"}/>
    </SafeAreaView>
  );
};

export default ChartDemo;
