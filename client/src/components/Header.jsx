import React, { useState } from "react";
import "../styles/Header.scss";
import smallLogo from "../assets/ChildSafe_small.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="bandeau">
        <div className="bandeau__content">
          <div className="bandeau__text">
            <a href="#" className="bandeau__text-link">
              Devis sous <strong>24h </strong> ouvrable
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={smallLogo} alt="Logo" className="navbar__logo-image" />
        </div>
        <ul className="navbar__links">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li
            className="navbar__dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="#">Nos Prestations</a>
            {dropdownOpen && (
              <ul className="dropdown__menu">
                <li>
                  <a href="#">Mariages</a>
                </li>
                <li>
                  <a href="#">Anniversaires</a>
                </li>
                <li>
                  <a href="#">Baptèmes</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">L'équipe</a>
          </li>
          <li>
            <a href="#">Postuler</a>
          </li>
        </ul>
        <div className="navbar__contact">
          <a href="#" className="navbar__devis-button">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
