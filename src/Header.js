import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header--logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />

      <div className="header--search">
        <input className="header--searchInput" type="text" />
        {/* Material UI */}
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <div className="header--option">
          <span className="header--optionLineOne">Hello Guest</span>
          <span className="header--optionLineOne">Sign In</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineTwo">Return</span>
          <span className="header--optionLineTwo">& Order</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineThree">Your</span>
          <span className="header--optionLineThree">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
