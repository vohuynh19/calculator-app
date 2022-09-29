import { Dispatch } from "react";

export type DisplayProps = {};

export type DisplayHandle = {
  onChangeText: (text: string) => void;
  onChangePreviousText: (text: string) => void;
  resetResult: () => void;
  currentText: string;
  previousResults: HistoryType[];
  result: string;
  isWaitNewNum: boolean;
  setIsWaitNewNum: Dispatch<boolean>;
};

export type HistoryType = {
  text: string;
  createdAt: string;
};
