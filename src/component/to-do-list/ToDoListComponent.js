/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const ToDoListComponent = () => {
  const [name, setName] = useState('');
  const [mainArr, setMainArr] = useState([]);
  const [ifEdit, setIfEdit] = useState(false);

  const handleAdd = () => {
    if (name.trim().length == 0) {
      alert('Please fill all fields first.');
    } else {
      const newList = mainArr.concat({name});
      setMainArr(newList);
      setName('');
    }
  };

  const handleDelete = nm => {
    const deleteItem = mainArr.filter(item => item.name !== nm);
    setMainArr(deleteItem);
  };

  const askingDeleteAlert = nm => {
    Alert.alert('Alert', 'Are you sure you want to delete this record ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'YES', onPress: () => handleDelete(nm)},
      ,
    ]);
  };

  const handleEdit = id => {
    setIfEdit(true);

    const newTodos = [...mainArr];
    const editItemIndex = mainArr.findIndex(index => index === id);
    // newTodos[editItemIndex] = Object.assign(newTodos[index], { value: newText });
    // console.log('===== editItemIndex', editItemIndex)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Data</Text>
      <View>
        <TextInput
          value={name}
          placeholder="enter your name"
          clearButtonMode={true}
          style={styles.textInput}
          onChangeText={nm => setName(nm)}
        />
        {ifEdit ? (
          <TouchableOpacity>
            <Text style={styles.addContainer}>EDIT</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleAdd()}>
            <Text style={styles.addContainer}>+ ADD</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={mainArr}
        renderItem={({item, index}) => {
          return (
            <View style={styles.wrapper}>
              <View>
                <Text style={styles.tit}>{item.name}</Text>
              </View>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => handleEdit(index)}>
                  <Text style={styles.editTitle}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => askingDeleteAlert(item.name)}>
                  <Text style={styles.subTitle}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingVertical: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  textInput: {
    borderWidth: 0.5,
    padding: 10,
  },
  addContainer: {
    fontWeight: 'bold',
    color: '#2192FF',
    fontSize: 18,
    marginVertical: 30,
    alignSelf: 'center',
  },
  subTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
  editTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
  tit: {
    fontSize: 20,
    fontWeight: '600',
  },
  wrapper: {
    backgroundColor: '#eee',
    margin: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ToDoListComponent;
