import React from "react";
// import { NavLink } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <Header />
      <Sidebar />
      {/* passing the information down in props to the component */}
    </>
  );
};
export default Navbar;
