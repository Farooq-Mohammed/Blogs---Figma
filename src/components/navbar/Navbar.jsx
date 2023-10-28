import React, { useEffect, useRef, useState } from "react";

import "./navbar.css";

const Navbar = () => {
  const menuRef = useRef();
  const menuBtnRef = useRef();

  const [menu, setMenu] = useState(false);
  const handleToggleMenu = () => setMenu((prev) => !prev);

  useEffect(() => {
    const handler = (e) => {
      if (!menuBtnRef.current.contains(e.target)) {
        if (!menuRef.current.contains(e.target)) setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="navbar">
      <div className="logo">
        <button
          className="menu"
          onClick={() => handleToggleMenu()}
          ref={menuBtnRef}
        >
          <i
            className={
              menu ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-lg"
            }
          ></i>
        </button>

        <a href="/">
          <h3>My_Blogs</h3>
        </a>
      </div>
      <div className="searchBar">
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by title, topic, interest"
        />
      </div>
      <div className={menu ? "links active" : "links"} ref={menuRef}>
        <a href="/portfolio"><i className="fa-solid fa-user"></i>Portfolio</a>
        <a href="/works"><i className="fa-solid fa-list-check"></i>Works</a>
        <a href="/blogs"><i className="fa-brands fa-blogger"></i>Blogs</a>
        <a href="/contact"><i className="fa-solid fa-address-card"></i>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
