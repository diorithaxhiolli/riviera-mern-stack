import React, { useState } from 'react';
import './Header.css'; // Import custom CSS

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">Riviera</a>
        </div>
        <nav className="nav">
          <div className="nav-left">
            <ul>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">More</button>
                <ul className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/events">Events</a></li>
                </ul>
              
              
                {/* {dropdownOpen && (
                <ul className="dropdown-content ">
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/events">Events</a></li>
                </ul>
                )} */}
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li className="login"><a href="/login">Log In</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;