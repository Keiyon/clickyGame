import React from "react";
import "../styles/Navbar.css";


const styles = {
  navbarStyle: {
    background: "violet",
  }
};

const Navbar = () => (

<nav style={styles.navbarStyle} className="navbar">
  <a href="/"> Welcome</a>
</nav>


);

export default Navbar;

