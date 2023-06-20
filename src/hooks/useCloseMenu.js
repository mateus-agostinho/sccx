import { useRef, useEffect } from "react";

const useCloseMenu = (toogleMenuHandler) => {
  const menuRef = useRef();

  useEffect(() => {
    const clickHandler = (e) => {
      if (!menuRef.current.contains(e.target)) toogleMenuHandler();
      //toogleMenuHandler();
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  return menuRef;
};

export default useCloseMenu;