import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />

            
            <input className="header__searchInput" type="text" />
        </div>
    )
}

export default Header
