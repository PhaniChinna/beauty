import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function FacialPage() {
  const [fasState, setFacial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/facials")
      .then((res) => setFacial(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt "> FACIALS : </h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {fasState.map((each) => (
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
        <div className="TableData">
          <div>
            <h1 className="MarginFacialscltlist ">Facials :</h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {fasState.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.rs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FacialPage;
