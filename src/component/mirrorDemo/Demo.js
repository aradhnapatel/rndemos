import React from 'react';
import {View, Text, Image} from 'react-native';
import {MirrorLists} from 'rn-mirror-lists';

const data = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/42688281?v=4',
    description: '1',
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/42688281?v=4',
    description: '2',
  },
  {
    id: 3,
    image: 'https://avatars.githubusercontent.com/u/42688281?v=4',
    description: '3',
  },
  {
    id: 4,
    image: 'https://avatars.githubusercontent.com/u/42688281?v=4',
    description: '4',
  },
  {
    id: 5,
    image: 'https://avatars.githubusercontent.com/u/42688281?v=4',
    description: '5',
  },
];

const Demo = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 5, paddingVertical: 50}}>
      <MirrorLists
        data={data}
        keyExtractor={({item}) => item.id.toString()}
        horizontalRenderItem={({item}) => (
          <View>
            <Image
              source={{uri: item.image}}
              style={{
                width: 64,
                height: 64,
                marginHorizontal: 12,
                marginVertical: 8,
                borderRadius: 32,
              }}
            />
            <Text style={{alignSelf: 'center'}}>{item.id}</Text>
          </View>
        )}
        verticalRenderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'pink',
              flex: 1,
              margin: 20,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{item.description}</Text>
          </View>
        )}
        // reverse={false} // optional
      />
    </View>
  );
};

export default Demo;
