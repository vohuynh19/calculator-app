import { convertFromStringToObj, getSecureStorageKey } from "utils/functions";

class StorageService {
  static getItemByKey = (key: string) => {
    return localStorage.getItem(getSecureStorageKey(key));
  };

  static getObjectItemByKey = (key: string) => {
    return convertFromStringToObj(
      localStorage.getItem(getSecureStorageKey(key))
    );
  };

  static getArrayItemByKey = (key: string) => {
    return localStorage.getItem(getSecureStorageKey(key));
  };

  static storeItemByKey = (key: string, value: any) => {
    return localStorage.setItem(getSecureStorageKey(key), value.toString());
  };
}

export default StorageService;
