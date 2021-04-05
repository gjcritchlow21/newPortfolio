import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default function NavBar() {
  return (
    <Menu>
      <Link id="navLinks" to={"/"}></Link>
      <Link id="navLinks" to={"/"}></Link>
      <Link id="navLinks" to={"/"}></Link>
    </Menu>
  );
}
