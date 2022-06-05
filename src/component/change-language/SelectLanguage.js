import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Modal} from 'react-native';
import {_storeExtraData} from './storage';
import {string} from './strings';
import {styles} from './styles';

const SelectLanguage = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(['english', 'japaneze']);
  const [selectedLang, setSelectedLang] = useState('english');

  useEffect(()=>{
    setSelectedLang()
  })

  const handelLang = item => {
    setSelectedLang(item);
    _storeExtraData('locale', selectedLang);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <Text>{selectedLang}</Text>
      </TouchableOpacity>

      <Text>{string.appName}</Text>

      <Modal visible={open} transparent={true} animationType="slide">
        <View style={styles.modelView}>
          <View style={styles.view}>
            <Button title="close" onPress={() => setOpen(false)} />
            {lang.map(item => {
              return (
                <TouchableOpacity onPress={() => handelLang(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectLanguage;
