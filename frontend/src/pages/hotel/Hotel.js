import React from 'react'
import "./Hotel.css"
import Navbar_collapsive from "../../components/navbar/Navbar.js"
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  // const [slideNumber, setSlideNumber] = useState(0);
  return (
    <div>
      <Navbar_collapsive />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 new york</span>
          </div>
          <span className="hotelDistance">
            excellent location - 500m rom center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get free
          </span>
          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
                className="hotelImg"
              />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                adipisci dolore nisi provident aliquam deleniti consectetur ad
                voluptates laudantium illo harum dolorem eaque expedita, cumque
                neque quos corporis. Molestiae, sed.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perrfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this process has an
                excellent score of 9.8!
              </span>
              <h2>
                <b>$942</b>(9 nights)
              </h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Hotel