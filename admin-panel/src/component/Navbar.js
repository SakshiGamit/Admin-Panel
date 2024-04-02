import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {/* passing the information down in props to the component */}
    </>
  );
};
export default Navbar;
