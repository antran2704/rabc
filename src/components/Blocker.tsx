import { useEffect, useState } from "react";
import { BlockerProvider } from "../context/blocker";
import { useBlocker } from "react-router-dom";
import React from "react";

const Blocker = ({ children }) => {
  const [isBlocker, setIsBlocker] = useState<boolean>(false);

  const onSetBlocker = (value: boolean) => {
    setIsBlocker(value);
  };

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    console.log(currentLocation, nextLocation);
    return isBlocker && currentLocation.pathname !== nextLocation.pathname;
  });

  useEffect(() => {
    if (!isBlocker) return;

    const onBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "asdasdasd";
    };
    
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [isBlocker]);

  return (
    <BlockerProvider value={{ isBlocker, onSetBlocker }}>
      {children}
      {blocker.state === "blocked" ? (
        <div>
          <p>Are you sure you want to leave?</p>
          <button
            onClick={() => {
              blocker.proceed();
              setIsBlocker(false);
            }}
          >
            Proceed
          </button>
          <button onClick={() => blocker.reset()}>Cancel</button>
        </div>
      ) : null}
    </BlockerProvider>
  );
};

export default Blocker;
