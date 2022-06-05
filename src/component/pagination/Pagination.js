import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Pagination = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  //   useEffect(() => getData(), []);
  useEffect(() => {
    // getData()
  }, []);

  const getData = () => {
    console.log('getData');
    setLoading(true);
    //Service to get the data from the server to render
    fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
      //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
        //Successful response
        setOffset(offset + 1);
        //Increasing the offset for the next API call
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const getItem = item => {
    //Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>pagination demo</Text>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        enableEmptySections={true}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
  },
});
