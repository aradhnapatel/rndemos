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
  const [editItem, setEditItem] = useState('');
  const [editIndex, setEditIndex] = useState('');

  // useEffect(() => {
  //   console.log('========');
  //   const array = [
  //     {
  //       name: 'ara',
  //     },
  //     {
  //       name: 'sagar',
  //     },
  //     {
  //       name: 'zini',
  //     },
  //   ];
  //   const edit = (array[1].name = 'ssssssßß');
  //   console.log('====edit====', edit, array);
  // }, []);

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

  const handleEdit = (id, item) => {
    setIfEdit(true);
    setName(item);
    setEditIndex(id);
  };

  const handleEditData = () => {
    const originalArr = mainArr;
    originalArr[editIndex] = {name};
    setMainArr(originalArr);
    setIfEdit(false);
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Data</Text>
      <View>
        {ifEdit ? (
          <TextInput
            value={name}
            placeholder="enter your name"
            // clearButtonMode={true}
            style={styles.textInput}
            onChangeText={nm => setName(nm)}
          />
        ) : (
          <TextInput
            value={name}
            placeholder="enter your name"
            clearButtonMode={true}
            style={styles.textInput}
            onChangeText={nm => setName(nm)}
          />
        )}
        {ifEdit ? (
          <TouchableOpacity onPress={() => handleEditData()}>
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
                <TouchableOpacity onPress={() => handleEdit(index, item.name)}>
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
