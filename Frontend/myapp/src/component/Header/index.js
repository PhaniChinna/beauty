import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Link } from "react-router-dom";

function AnisHeader() {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };
  return (
    <>
      {/* DeskTopView */}
      <div className="HeaderContainerOne">
        <div className="headerCardContainerTwo">
          <Link className="List" to="/">
            <h2 className="HeaderAnisBeauty">ANI'S BEAUTY</h2>
            <p className="cardForLadies">OnlyForLadies</p>
          </Link>
        </div>

        <div className="HeaderListCard">
          <div className="HeaderListCardFacials">
            <Link className="LineThrought" to="/OurServices/cleanUp">
              <h1 className="MarginFacials ">CleanUps</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Facials">
              <h1 className="MarginFacials ">Facials</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Threding">
              <h1 className="MarginFacials ">Threading</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Bleaching">
              <h1 className="MarginFacials ">Bleach</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Waxing">
              <h1 className="MarginFacials ">Waxing</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Detan">
              <h1 className="MarginFacials ">Detan</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/HairTreatment">
              <h1 className="MarginFacials ">HairTreatment</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/ourServices/pedicureManicure">
              <h1 className="MarginFacials ">PedicureManicure</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/HairCut">
              <h1 className="MarginFacials ">HairCuts</h1>
            </Link>
          </div>
          <div>
            <Link className="LineThrought" to="/OurServices/Bridal">
              <h1 className="MarginFacials ">Bridal</h1>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Container */}
      <div className="MobileHeaderContainer">
        <div className="MobileContContainerOne">
          <Link className="List" to="/">
            <h2 className="AnisMobileContainer">ANI'S BEAUTY</h2>
            <p className="onlyForHeaderMobile">OnlyForLadies</p>
          </Link>
          <div className="MobileXCardDropDown">
            <div className="SectionContainer">
              <select
                className="SectionConContainer"
                onChange={handleNavigation}
              >
                <option value="/OurServices/cleanUp">CleanUps</option>
                <option value="/OurServices/Facials">Facials</option>
                <option value="/OurServices/Threding">Threading</option>
                <option value="/OurServices/Bleaching">Bleach</option>
                <option value="/OurServices/Waxing">Waxing</option>
                <option value="/OurServices/Detan">Detan</option>
                <option value="/OurServices/HairTreatment">
                  HairTreatment
                </option>
                <option value="/ourServices/pedicureManicure">
                  PedicureManicure
                </option>
                <option value="/OurServices/HairCut">HairCuts</option>
                <option value="/OurServices/Bridal">Bridal</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnisHeader;
