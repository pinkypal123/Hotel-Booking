import { useNavigate } from "react-router-dom";
import Hotel from "../../Pages/Hotel/Hotel";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate()
  function seeAvaialbility(){
navigate('/room')
  }
  return (
    <>
    <div className="searchItem">
      <img
        src="https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_960_720.jpg"
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
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={seeAvaialbility}>Book Now</button>
        </div>
      </div>
    </div>
    <div className="searchItem">
    <img
      src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
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
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">$112</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton" onClick={seeAvaialbility}>Book Now</button>
      </div>
    </div>
  </div>
  <div className="searchItem">
  <img
    src="https://cdn.pixabay.com/photo/2014/10/16/08/39/bedroom-490779_960_720.jpg"
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
      Entire studio • 1 bathroom • 21m² 1 full bed
    </span>
    <span className="siCancelOp">Free cancellation </span>
    <span className="siCancelOpSubtitle">
      You can cancel later, so lock in this great price today!
    </span>
  </div>
  <div className="siDetails">
    <div className="siRating">
      <span>Excellent</span>
      <button>8.9</button>
    </div>
    <div className="siDetailTexts">
      <span className="siPrice">$112</span>
      <span className="siTaxOp">Includes taxes and fees</span>
      <button className="siCheckButton" onClick={seeAvaialbility}>Book Now</button>
    </div>
  </div>
</div>
<div className="searchItem">
      <img
        src="https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg"
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
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={seeAvaialbility}>Book Now</button>
        </div>
      </div>
    </div>
    <div className="searchItem">
    <img
      src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg"
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
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">$112</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton" onClick={seeAvaialbility}>Book Now</button>
      </div>
    </div>
  </div>
  </>
  );
};

export default Search;