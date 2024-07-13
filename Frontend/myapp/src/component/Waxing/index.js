import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function WaxingPage() {
  const [waxingGetData, setWaxing] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/waxingData")
      .then((response) => setWaxing(response.data))
      .catch((error) => console.log(Error));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Waxing : </h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>Choclate</th>
                <th>Rica</th>
              </tr>
            </thead>
            <tbody>
              {waxingGetData.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.Choclate}</td>
                  <td>{each.Rica}</td>
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
          <h1 className="MarginFacialscltlist ">Waxing Page</h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>Choclate</th>
              <th>Rica</th>
            </tr>
          </thead>
          <tbody>
            {waxingGetData.map((each) => (
              <tr key={each.name}>
                <td>{each.name}</td>
                <td>{each.Choclate}</td>
                <td>{each.Rica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WaxingPage;
