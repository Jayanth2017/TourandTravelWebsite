import { Component } from "react";
import "./NavStyles.css";
import { MenuItems } from "./Menuitem";
import { link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavItems">
        <h1 className="navbar-logo">J Travels</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
