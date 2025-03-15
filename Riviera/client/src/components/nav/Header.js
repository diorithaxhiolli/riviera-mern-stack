import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Import custom CSS

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
              <li><a href="/contact">Contact Us</a></li>
              <li className="dropdown" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="dropdown-button">More</button>
                <ul className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/about">About Us</a></li>
                </ul>
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
