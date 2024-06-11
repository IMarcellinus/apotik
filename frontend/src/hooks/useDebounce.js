/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const useDebounce = (callback, delay, deps, isAllow) => {
  const [first, setFirst] = React.useState(true);
  React.useEffect(() => {
    // if (!isAllow) return;
    if (first) {
      callback();
      setFirst(false);
      return;
    }
    const handler = setTimeout(callback, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, ...deps]);
};

export default useDebounce;
