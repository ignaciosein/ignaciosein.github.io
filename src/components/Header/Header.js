import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../img/logo.png";
import MenuBurger from "../../img/menuburger.png";
import Nav from "../../components/Nav/Nav";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const paint = () => {
    if (menu == true) {
      return (
        <div className="menu-list">
          
          <ul>
            <li>
              <Link onClick={() => setMenu(false)} to={"/"}>
                Inicio
              </Link>
            </li>
            <li>
            <Link onClick={() => setMenu(false)} to={"/calculator"}>
              Calculadora
            </Link>
            </li>
            <li>
            
              <Link onClick={() => setMenu(false)} to={"/team"}>
                Equipo
              </Link>
            </li>
            <li><Link onClick={() => setMenu(false)} to={"/contact"}>
              Contacto
            </Link></li>
           
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="Header">
      <div className="container-header">
        <div className="logo-header">
          <h3>CODE-EXPRESS </h3>
          <img src={Logo}></img>
          <Nav className="menuDesktop"/>
        </div>
        <div className="menu-burger">
          <img
            onClick={() => {
              setMenu(!menu);
            }}
            src={MenuBurger}
          ></img>
        </div>
      </div>
      {paint()}
    </div>
  );
};

export default Header;
