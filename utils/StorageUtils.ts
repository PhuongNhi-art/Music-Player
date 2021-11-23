import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageUtils {
  static MUSIC = '@music';
  static USER_EMAIL = '@user_email'
  static USER_ID = '@user_id';
  static USER_USERNAME = '@user_username'
  static saveData = async (key: any, value: any) => {
    try {
      // const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, value)
      console.log('Data successfully saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  static getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value != null ? value : null;
    
    } catch (e) {
      // error reading value
    }
  }
}
export default StorageUtils;