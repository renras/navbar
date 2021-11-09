import React, { useState, useEffect, useRef } from "react";
import { links, icons } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showPages, setShowPages] = useState(false);
  const refPages = useRef(null);
  const refNav = useRef(null);

  const handleClick = () => {
    setShowPages(!showPages);
  };

  useEffect(() => {
    const pagesHeight = refPages.current.getBoundingClientRect().height;
    console.log(refNav.current.getBoundingClientRect().height);
    if (showPages) {
      refNav.current.style.height = `${pagesHeight}px`;
    } else {
      refNav.current.style.height = 0;
    }
  }, [showPages]);

  return (
    <header>
      <div className="heading">
        <h1>
          Coding <span>Addict</span>
        </h1>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <nav ref={refNav}>
        <ul className="pages" ref={refPages}>
          {links.map((page) => {
            const { id, title } = page;
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </nav>
      <nav className="navForIcons">
        <ul className="icons">
          {icons.map((singleIcon) => {
            const { id, icon } = singleIcon;
            return <li key={id}>{icon}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
