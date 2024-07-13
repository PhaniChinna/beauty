import React, { useEffect, useState } from "react";
import "./index.css";
import AnisHeader from "../Header";
import axios from "axios";

function BridalPage() {
  const [bridalGetData, setBridalData] = useState([]);
  const [sareegetData, setSareeData] = useState([]);
  const [gustMakeData, setGuestData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/bridalMakeOverData")
      .then((response) => setBridalData(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/sareesData")
      .then((response) => setSareeData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/guestMakeOverData")
      .then((response) => setGuestData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* DeskTopView */}
      <div className="AnisFacialContainer">
        <AnisHeader />
        <div className="FacialContainerDisplay">
          <div>
            <h1 className="MarginFacialsclt ">Bridal :</h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {bridalGetData.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.rs}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className="MarginFacialsclt ">Guest MakeOver :</h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {gustMakeData.map((each) => (
                <tr key={each.name}>
                  <td>{each.name}</td>
                  <td>{each.rs}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className="MarginFacialsclt ">Saree :</h1>
          </div>
          <table className="TableData">
            <thead>
              <tr>
                <th>Name</th>
                <th>RS</th>
              </tr>
            </thead>
            <tbody>
              {sareegetData.map((each) => (
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
          <h1 className="MarginFacialscltlist ">Bridal : </h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {bridalGetData.map((each) => (
              <tr key={each.name}>
                <td>{each.name}</td>
                <td>{each.rs}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="MarginFacialscltlist ">Guest MakeOver :</h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {gustMakeData.map((each) => (
              <tr key={each.name}>
                <td>{each.name}</td>
                <td>{each.rs}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="MarginFacialscltlist ">Saree :</h1>
        </div>
        <table className="TableData">
          <thead>
            <tr>
              <th>Name</th>
              <th>RS</th>
            </tr>
          </thead>
          <tbody>
            {sareegetData.map((each) => (
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

export default BridalPage;
