import LocalizedStrings from 'react-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LANGUAGE} from './keys';
import {readData} from './storage';

const Local = new LocalizedStrings({
  en: {
    appName: 'Relomy',
  },
  ja: {
    appName: 'メンテ',
  },
});


const _retrieveData = async () => {
  const data = {
    locale: '',
  };
  try {
    const keys = await AsyncStorage.getAllKeys();
    const value = await AsyncStorage.multiGet(keys);
    if (value !== null) {
      console.log('==================value==================');
      console.log(value);
      console.log('====================================');
      value.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        console.log(
          '=================data[store[i][0]] = store[i][1]===================',
        );
        console.log((data[store[i][0]] = store[i][1]));
        console.log('====================================');
        data[store[i][0]] = store[i][1];
      });
    }
  } catch (error) {
    console.log(error);
  }
  return data;
};

_retrieveData().then(data => {
  console.log('===============data=====================');
  console.log(data);
  console.log('====================================');
  if (data.locale) {
    string.setLanguage(data.locale);
  }
});

export const string = Local;


