import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageUtils {
  static SHOW_PLAYER = '@show_player';
  static MUSIC = '@music';
  static saveData = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value)
      console.log('Data successfully saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  static getData = async (key: any) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }
}
export default StorageUtils;