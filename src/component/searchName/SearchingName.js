import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {styles} from './styles';

const data = [
  {
    name: 'AARTI DOBARIYA',
    subName: 'technomargin',
  },
  {
    name: 'BHAKTI MAKVANA',
    subName: 'technomargin',
  },
  {
    name: 'CHINTU KATHROTIYA',
    subName: 'technomargin',
  },
  {
    name: 'DHARMI JASOLIYA',
    subName: 'technomargin',
  },
  {
    name: 'EKTA SAVANI',
    subName: 'technomargin',
  },
  {
    name: 'kRISHNA PATEL',
    subName: 'technomargin',
  },
  {
    name: 'YOGITA SOHALIYA',
    subName: 'technomargin',
  },
  {
    name: 'SONAL SAVANI',
    subName: 'technomargin',
  },
  {
    name: 'AMRUTA HARKHANI',
    subName: 'technomargin',
  },
  {
    name: 'MUKUND SAVLIYA',
    subName: 'technomargin',
  },
  {
    name: 'PARTH RAMANI',
    subName: 'technomargin',
  },
  {
    name: 'PRASHANT DOBARIYA',
    subName: 'technomargin',
  },
  {
    name: 'KUSH SHIROYA',
    subName: 'technomargin',
  },
  {
    name: 'JANKI SOJITRA',
    subName: 'technomargin',
  },
  {
    name: 'NISTHA BATHANI',
    subName: 'technomargin',
  },
  {
    name: 'RENU LUVANA',
    subName: 'technomargin',
  },
  {
    name: 'ZIBRA ZAPANI',
    subName: 'technomargin',
  },
];

const SearchingName = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState('');

  const handelSearch = text => {
    setSearch(text);
    if (text.length) {
      const searchData = data.filter(
        val =>
          val.name.toLowerCase().includes(text.toLowerCase()) ||
          val.name.toUpperCase().includes(text.toUpperCase()),
      );
      setList(searchData);
    }
    data;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Name</Text>
      <TextInput
        value={search}
        onChangeText={val => handelSearch(val)}
        placeholder="Search Name"
        placeholderTextColor="grey"
        style={styles.search}
      />
      {search ? (
        <FlatList
          data={list}
          renderItem={({item}) => {
            return (
              <View style={styles.row}>
                <View style={styles.profile}>
                  <Text style={styles.firstLetter}>
                    {item.name.toString().charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.subName}>{item.subName}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.row}>
                <View style={styles.profile}>
                  <Text style={styles.firstLetter}>
                    {item.name.toString().charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.subName}>{item.subName}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default SearchingName;
