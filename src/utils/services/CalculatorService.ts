export default class CalculatorService {
  static handleClickOperatorButton = (
    currentString: string,
    operator: string
  ) => {
    if (currentString.length) {
      if (!isNaN(Number(currentString[currentString.length - 1]))) {
        return currentString + operator;
      }
      return currentString.substring(0, currentString.length - 1) + operator;
    }
    return currentString;
  };

  static handleClickNumberButton = (currentString: string, num: string) => {
    return currentString + num;
  };

  static handleCalculate = (equationStr: string) => {
    let tempStr = equationStr;
    tempStr = tempStr.replaceAll("x", "*");
    tempStr = tempStr.replaceAll("÷", "/");

    let res;
    try {
      res = eval(tempStr);
    } catch (error) {
      res = NaN;
    }
    return res;
  };
}
