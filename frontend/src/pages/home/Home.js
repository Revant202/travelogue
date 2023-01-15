import React from "react";
import Featured from "../../components/featured/Featured.js";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.js";
import Footer from "../../components/footer/Footer.js";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList.js";
import Navbar_collapsive from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList.js";
import "./Home.css"

const Home = () => {
  return (
    <>
      <Navbar_collapsive />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties/>
        <MailList/> 
        <Footer/>
      </div>
    </>
  );
};
export default Home; 