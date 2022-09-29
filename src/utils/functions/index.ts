import { ThemeMode } from "types";
import { DARK_COLORS, ENV, LIGHT_COLORS } from "utils/configs";

export const changeTheme = (theme: ThemeMode) => {
  const _colorMapping: any = (theme: ThemeMode) => {
    if (theme === ThemeMode.DARK) return DARK_COLORS;
    return LIGHT_COLORS;
  };

  Object.keys(LIGHT_COLORS).forEach((val) => {
    document.documentElement.style.setProperty(val, _colorMapping(theme)[val]);
  });
};

export const convertFromStringToObj = (stringObj: string | null) => {
  return JSON.parse(stringObj || "");
};

export const convertFromStringToArr = (stringObj: string) => {
  return stringObj.split(",");
};

export const getSecureStorageKey = (key: string) => {
  return ENV.APP_STORAGE_KEY + key;
};
