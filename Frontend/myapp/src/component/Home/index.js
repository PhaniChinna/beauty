import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function AnisHome() {
  return (
    <>
      {/* DeskTop Layout */}
      <div className="HomeContainerOne">
        <div>
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1720767644/Beauty-Parlour-20_ct93s8.webp"
            alt="HomeImage"
            className="ImageContainer"
          />
        </div>
        <div className="HeaderCradContainer">
          <div className="HeaderCardListOne">
            <h1 className="AnisEmbaded">ANI 'S</h1>
            <h2 className="Professional">PROFESSIONAL</h2>
            <h1 className="Beauty">BEAUTY HUB</h1>
            <div className="Paragraph">
              <p className="ParaHome">
                The Beast Part Of Beauty Which a Picture Cannot Express Nor The
                First Sight of Life
              </p>
            </div>
            <div className="HomeButtonOur">
              <Link to="/OurServices/Facials">
                <button type="button" className="OurButton">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="MobileContainer">
        <div>
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1720767644/Beauty-Parlour-20_ct93s8.webp"
            alt="MobileImage"
            className="MobileImageList"
          />
        </div>
        <div className="AnisMobileConty">
          <h1 className="AnisMobileCont">ANI 'S</h1>
          <h2 className="AnisProfession"> PROFESSIONAL</h2>
          <h1 className="AnisBeautyHubThree">BEAUTY HUB</h1>
          <div className="BeautyHubContainer">
            <p className="ParaGraphContainerLest">
              The Beast Part Of Beauty Which a Picture Cannot Express Nor The
              First Sight of Life
            </p>
          </div>
          <div className="BtnContainer">
            <Link to="/OurServices/Facials">
              <button type="button" className="btnButton">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnisHome;
