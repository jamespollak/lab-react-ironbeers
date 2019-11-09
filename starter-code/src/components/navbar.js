import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <a className="navItem" href="/">
          Home
        </a>
        <a className="navItem" href="/beers">
          Beers
        </a>
        <a className="navItem" href="/random-beer">
          Random Beer
        </a>
        <a className="navItem" href="/add-beer">
          Add Beer
        </a>
      </nav>
    );
  }
}

export default NavBar;
