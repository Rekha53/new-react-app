import React from "react";
import { useState } from "react";
import App from "./App";
function Header(props) {
    // const [activeHeader, setActiveHeader] = useState('');
    // const [cartCount, setCartCount] = useState(0);
    return (
        <div className="header-container">
            <ul className="navigation-menu">
                <li>Shirt</li>
                <li>Pant</li>
                <li>Shoes</li>
                <li>Cart
                    ( {props.key} )
                </li>
            </ul>
        </div>
    );
}
export default Header;