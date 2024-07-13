import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function BleachingPage() {
  const [bleachgetData, setBleachData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/bleachData")
      .then((response) => setBleachData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Bleach : </h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {bleachgetData.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.rs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* MobileContainer */}
      <div className="MobileFacialContainer">
        <AnisHeader />
        <div>
          <h1 className="MarginFacialscltlist ">Bleaching :</h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {bleachgetData.map((each) => (
              <tr key={each.name}>
                <td>{each.name}</td>
                <td>{each.rs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BleachingPage;
