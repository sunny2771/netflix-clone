import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../netfix_logo.png";

import { ImSearch } from "react-icons/im";

const Header = ({ getVal }) => {
  const [input, setInput] = useState(false);
  const [inputData, setInputData] = useState("");

  const inputRef = useRef(null)

  useEffect(() => {
   inputRef?.current?.focus()
  }, [input])
  

  const handleChange = (e) => {
    let inputVal = e.target.value.toLowerCase()
    setInputData(e.target.value);
    getVal(inputVal);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="header-links">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>

      {input && (
        <input
          type="text"
          placeholder="type to search.."
          className="search-input"
          ref={inputRef}
          onChange={handleChange}
          value={inputData}
        />
      )}
      <span className="search-logo" onClick={() => setInput(!input)}>
        <ImSearch />
      </span>
    </div>
  );
};

export default Header;
