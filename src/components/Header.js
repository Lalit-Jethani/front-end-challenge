import React from "react";
import Navigation from "./Navigation";
import SearchContainer from "./SearchContainer";

const Header = () => {
  return (
    <header className="Header">
      <Navigation />
      <SearchContainer />
    </header>
  );
};

export default Header;
