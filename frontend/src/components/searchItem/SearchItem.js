import React from 'react'
import "./SearchItem.css"
function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          ZEntire studio . 1 bathroom . 21 m sq 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {/* {item.rating && ( */}
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
        {/* )} */}
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          {/* <Link to={`/hotels/${item._id}`}> */}
            <button className="siCheckButton">See availability</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SearchItem