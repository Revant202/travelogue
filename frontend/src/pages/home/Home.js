import React from "react";
import Featured from "../../components/featured/Featured.js";
import Header from "../../components/header/Header";
import Navbar_collapsive from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar_collapsive />
      <Header />
      <div className="homeContainer">
        <Featured/>
      </div>
    </>
  );
};
export default Home; 