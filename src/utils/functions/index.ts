export function getWindowDimensions() {
  if (typeof window === "undefined") {
    return { width: undefined, height: undefined };
  }
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height,
  };
}
