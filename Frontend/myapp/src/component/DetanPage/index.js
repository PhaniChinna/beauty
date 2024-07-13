import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function DetanPage() {
  const [detanGetData, setDetanData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/detanData")
      .then((response) => setDetanData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Detan : </h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {detanGetData.map((each) => (
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
          <h1 className="MarginFacialscltlist ">Detan :</h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {detanGetData.map((each) => (
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

export default DetanPage;
