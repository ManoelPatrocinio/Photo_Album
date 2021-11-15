import { useState, useEffect } from "react";

export const UseOutsideClick = (el, inititialState) => {
  const [isActive, setIsActive] = useState(inititialState);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && el.currentTarget.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);
  return [isActive, setIsActive];
};
