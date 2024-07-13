import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function CleanUpPage() {
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/CleanUp")
      .then((response) => setCleanData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Clean Ups : </h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {cleanData.map((each) => (
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
          <h1 className="MarginFacialscltlist ">CleanUp : </h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {cleanData.map((each) => (
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

export default CleanUpPage;
