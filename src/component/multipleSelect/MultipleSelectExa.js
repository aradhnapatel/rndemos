/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const data = [
  {
    color: 'pink',
  },
  {
    color: 'red',
  },
  {
    color: 'blue',
  },
  {
    color: 'orange',
  },
  {
    color: 'sky',
  },
  {
    color: 'gray',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'brown',
  },
  {
    color: 'black',
  },
  {
    color: 'gray',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'brown',
  },
  {
    color: 'black',
  },
  {
    color: 'gray',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'brown',
  },
  {
    color: 'black',
  },
  {
    color: 'gray',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'brown',
  },
  {
    color: 'black',
  },
  {
    color: 'gray',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'brown',
  },
  {
    color: 'black',
  },
];

const MultipleSelectExa = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = item => {
    // const selectedItems = [];
    // const selectedItem = item;
    // selectedItems.push(selectedItem, item);
    // console.log('======== selectedItem', selectedItems);
    // setSelected(selectedItem);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MultipleSelectExample</Text>
      <FlatList
        data={data}
        numColumns={4}
        contentContainerStyle={{alignSelf: 'center'}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.wrapper}
              onPress={() => handleSelect(item)}>
              <Text>{item.color}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  wrapper: {
    padding: 10,
    borderWidth: 0.3,
    margin: 5,
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: 'pink',
  },
});

export default MultipleSelectExa;
