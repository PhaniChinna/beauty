import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AnisHome from "./component/Home";
import FacialPage from "./component/FacialPage";
import BleachingPage from "./component/BleachingPage";
import ThredingPage from "./component/ThredingPage";
// import HairWashPage from "./component/HairWash";
import HairCutsPage from "./component/HairCuts";
import WaxingPage from "./component/Waxing";
import HairTreatMentPage from "./component/HairTreatments";
import BridalPage from "./component/Bridal";
import AccountPage from "./component/AccountPage";
import PedicureManicure from "./component/pedicureManicure";
import CleanUpPage from "./component/ClenUp";
import DetanPage from "./component/DetanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnisHome />} />
        <Route path="/OurServices/Facials" element={<FacialPage />} />
        <Route path="/OurServices/Bleaching" element={<BleachingPage />} />
        <Route path="/OurServices/Threding" element={<ThredingPage />} />
        {/* <Route path="/OurServices/HairWash" element={<HairWashPage />} /> */}
        <Route path="/OurServices/HairCut" element={<HairCutsPage />} />
        <Route path="/OurServices/Waxing" element={<WaxingPage />} />
        <Route
          path="/OurServices/HairTreatment"
          element={<HairTreatMentPage />}
        />
        <Route path="/OurServices/Bridal" element={<BridalPage />} />
        <Route path="/OurServices/Account" element={<AccountPage />} />
        <Route
          path="/OurServices/pedicureManicure"
          element={<PedicureManicure />}
        />
        <Route path="/OurServices/cleanUp" element={<CleanUpPage />} />
        <Route path="/OurServices/Detan" element={<DetanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
