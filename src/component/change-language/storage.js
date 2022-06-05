import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const _storeExtraData = async (key, value) => {
  try {
    await AsyncStorage.multiSet([[key, value]]);
  } catch (error) {
    console.log(error);
  }
};

export const readData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (e) {
    return e;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

export const removeItemValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};
