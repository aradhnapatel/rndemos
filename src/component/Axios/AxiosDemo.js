import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const AxiosDemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    let resp = await axios.get('https://reqres.in/api/users?page=2');
    setData(resp.data.data);
    console.log('====================================');
    console.log(resp.data.data);
    console.log('====================================');
  };

  return (
    <View style={styles.container}>
      <Text>axios api call</Text>
      {/* get */}
      <FlatList
        data={data}
        renderItem={({item}) => {
          
          return (
            <View>
              <Text>{item.email}</Text>
            </View>
          );
        }}
      />
      {/* post */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
  },
});

export default AxiosDemo;
