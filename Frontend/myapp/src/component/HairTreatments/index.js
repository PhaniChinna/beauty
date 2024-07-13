import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function HairTreatMentPage() {
  const [hrState, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/hairTreatment")
      .then((res) => setState(res.data))
      .catch((error) => console.log("Error"));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Hair Treatment :</h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {hrState.map((each) => (
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
          <h1 className="MarginFacialscltlist ">HairTreatment : </h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {hrState.map((each) => (
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

export default HairTreatMentPage;
