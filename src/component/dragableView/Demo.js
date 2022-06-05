/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

import Draggable from 'react-native-draggable';
import EmojiModal from 'react-native-emoji-modal';

const Demo = () => {
  const [sticker, setSticker] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Add Sticker
        </Text>
        <Draggable x={50} y={50}>
          <Text style={{fontSize: 60}}>{sticker}</Text>
        </Draggable>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => setOpen(!open)}
        style={{
          flex: 0.45,
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: 100,
        }}>
        <Text style={{textAlign: 'center', color: 'blue', fontWeight: 'bold'}}>
          Add Stickers
        </Text>
        {open && (
          <EmojiModal
            scrollStyle={true}
            backgroundStyle={{backgroundColor: 'white'}}
            onEmojiSelected={emoji => {
              setSticker(emoji);
            }}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

export default Demo;
