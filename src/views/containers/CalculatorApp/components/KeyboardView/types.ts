import React from "react";
import { DisplayHandle } from "../DisplayView/types";

export type KeyboardViewProps = {
  displayRef: React.RefObject<DisplayHandle>;
};

export type KeyType = {
  title: any;
  extraClass?: string;
  onClick?: () => void;
  isBlock?: boolean;
};

export type KeyList = (
  displayRef: React.RefObject<DisplayHandle>
) => KeyType[][];
