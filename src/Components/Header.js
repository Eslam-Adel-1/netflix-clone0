import React, { useEffect, useState, useCallback, memo } from "react";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

// Memoize Avatar component to prevent unnecessary re-renders
const MemoizedAvatar = React.memo(Avatar);

const Header = memo(() => {
  const [show, setShow] = useState(false);

  // Debounce function to limit the rate at which the scroll event handler is invoked
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleScroll = useCallback(
    debounce(() => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  //=============================================================

  return (
    <div className={show ? "header_main_sec" : "header_main"}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix"
      />
      <MemoizedAvatar />
    </div>
  );
});

export default Header;
