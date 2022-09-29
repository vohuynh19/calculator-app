import { ThemeMode } from "types";
import { DARK_COLORS, ENV, LIGHT_COLORS } from "utils/constants";

/**
 * @desc Get the current window size
 * @returns Object contains window height and width
 */
export const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: undefined, height: undefined };
  }
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height,
  };
};

/**
 * @desc Change application theme
 */
export const changeTheme = (theme: ThemeMode) => {
  const _colorMapping: any = (theme: ThemeMode) => {
    if (theme === ThemeMode.DARK) return DARK_COLORS;
    return LIGHT_COLORS;
  };

  Object.keys(LIGHT_COLORS).forEach((val) => {
    document.documentElement.style.setProperty(val, _colorMapping(theme)[val]);
  });
};

/**
 * @desc Convert from string to object
 */
export const convertFromStringToObj = (stringObj: string | null) => {
  return JSON.parse(stringObj || "");
};

/**
 * @desc Convert from string to array
 */
export const convertFromStringToArr = (stringObj: string) => {
  return stringObj.split(",");
};

export const getSecureStorageKey = (key: string) => {
  return ENV.APP_STORAGE_KEY + key;
};
