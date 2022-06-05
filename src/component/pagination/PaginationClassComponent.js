import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class PaginationClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      isLoading: 'false',
    };
  }

  componentDidMount() {
    const apiUrl =
      'https://jsonplaceholder.typicode.com/posts?_limit=5&_page=' +
      this.state.page;
    fetch(apiUrl)
      .then(res => res.json())
      .then(resJson => {
        this.setState({data: resJson});
      });
  }

  handelMore = async () => {
    await this.setState({page: this.state.page + 1, isLoading: true});
    const apiUrl =
      'https://jsonplaceholder.typicode.com/posts?_limit=5&_page=' +
      this.state.page;
    fetch(apiUrl)
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          data: this.state.data.concat(resJson),
          isLoading: false,
        });
      });
  };

  renderFooter = () => { 
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color="red" />
      </View>
    ) : null;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> pagination class component </Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => {
            console.log('===========item==========', item);
            return (
              <View style={styles.wrapper}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.handelMore}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  wrapper: {
    backgroundColor: 'lightgrey',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

// Api pagination. demo - 2
// import React, {useState} from 'react';
// import {useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   ActivityIndicator,
// } from 'react-native';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [pageCurrent, setPageCurrent] = useState(1);

//   useEffect(() => {
//     setIsLoading(true);
//     getData();
//     return () => {};
//   }, [pageCurrent]);

//   const getData = async () => {
//     const apiURL =
//       'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
//       pageCurrent;
//     fetch(apiURL)
//       .then(res => res.json())
//       .then(resJson => {
//         setData(data.concat(resJson));
//         setIsLoading(false);
//       });
//   };

//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.itemRow}>
//         <Image source={{url: item.url}} style={styles.itemImage} />
//         <Text style={styles.itemsText}>{item.title}</Text>
//         <Text style={styles.itemsNo}>{item.id}</Text>
//       </View>
//     );
//   };

//   const renderFooter = () => {
//     return isLoading ? (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     ) : null;
//   };

//   const handleLoadMore = () => {
//     setPageCurrent(pageCurrent + 1);
//     setIsLoading(true);
//   };

//   return (
//     <FlatList
//       style={styles.container}
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//       ListFooterComponent={renderFooter}
//       onEndReached={handleLoadMore}
//       onEndReachedThreshold={0}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     backgroundColor: '#f5fcff',
//   },
//   itemRow: {
//     borderBottomColor: '#ccc',
//     marginBottom: 10,
//     borderBottomWidth: 2,
//   },
//   itemImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   itemsText: {
//     fontSize: 30,
//     textAlign: 'center',
//   },
//   itemsNo: {
//     fontSize: 40,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   loader: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
// });

// export default App;
