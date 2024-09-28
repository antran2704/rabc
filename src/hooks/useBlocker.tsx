import { useContext } from "react";
import { BlockerContext, IBlockerContext } from "../context/blocker";

const useBlocker = () => {
  const blocker = useContext<IBlockerContext>(BlockerContext);

  if (!blocker) return {};

  const {isBlocker, onSetBlocker} = blocker;

  return { isBlocker, onSetBlocker };
};

export default useBlocker;
