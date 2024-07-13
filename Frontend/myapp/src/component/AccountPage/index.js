import React from "react";
import "./index.css";
import AnisHeader from "../Header";

function AccountPage() {
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <h1>Account Page</h1>
        </div>
      </div>
      {/* MobileContainer */}
      <div className="MobileFacialContainer">
        <AnisHeader />
        <div>
          <h1>Account Page</h1>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
