import { createContext } from "react";

export interface IBlockerContext {
    isBlocker: boolean;
    onSetBlocker: (value: boolean) => void;
  }

export const BlockerContext = createContext<IBlockerContext>(null);
export const BlockerProvider = BlockerContext.Provider;
