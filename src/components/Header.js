import React from "react";
import logo from "../images/applogo.png";
import booksheart from "../images/bx_bx-book-heart.png";
import premium from "../images/fluent_premium-person-20-regular.png";
import bell from "../images/ic_round-notifications-none.png";
import profile from "../images/IMG20210528181544.png";

import { FaSearch } from "react-icons/fa";

const Header = ({ searchText ,InputEvent}) => {
  return (
    <div>
      <header className="App-header">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "55px", padding: "10px" }}
          />
          <div className="logoText">
            KeazoN
            <span style={{ color: "rgb(161,161,161)", fontSize: "20px" }}>
              BOOKS
            </span>
          </div>
        </div>
        <div className="searchBox">
          <div className="search">
            <FaSearch className="icon-color" />
            <input placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            value={searchText}
            onChange={InputEvent}
            />
          </div>
          <button type="button" className="btn">
            Search
          </button>
        </div>
        <div className="right-header">
          <img src={booksheart} alt="heart" className="right"></img>
          <img src={bell} alt="heart" className="right"></img>
          <img src={premium} alt="heart" className="right"></img>
          <img src={profile} alt="heart" className="right"></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
