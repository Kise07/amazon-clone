import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header--logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
        <LocationOnOutlinedIcon />
      </Link>

      <span className="header--text">
        <span className="header--optionLineOne">Hello</span>
        <span className="header--optionLineTwo">Select Your Address</span>
      </span>

      <div className="header--search">
        <input className="header--searchInput" type="text" />
        {/* Material UI */}
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <div className="header--option">
          <span className="header--optionLineOne">Hello Guest</span>
          <span className="header--optionLineTwo">Sign In</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">Return</span>
          <span className="header--optionLineTwo">& Order</span>
        </div>

        <div className="header--option">
          <span className="header--optionLineOne">Your</span>
          <span className="header--optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header--optionBasket">
            <ShoppingCartIcon />
            <span className="header--optionLineTwo header--basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
