const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Creating And Connecting to Db

const MySQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Phani@root",
  database: "anisbeauty",
});

//GET CleanUP Data
app.get("/CleanUp", (request, response) => {
  const CleanSQL = "SELECT * FROM `anisbeauty`.`cleanups`";
  MySQL.query(CleanSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//GET FACIAL DATA

app.get("/facials", (request, response) => {
  const facialsSQL = "SELECT * FROM `anisbeauty`.`facials`";
  MySQL.query(facialsSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//GET THREADING DATA

app.get("/threading", (request, response) => {
  const ThSQL = "SELECT * FROM `anisbeauty`.`threading`";
  MySQL.query(ThSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//Bleaching Data

app.get("/bleachData", (request, response) => {
  const BleachSQL = "SELECT * FROM `anisbeauty`.`bleach`";
  MySQL.query(BleachSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//Waxing Data
app.get("/waxingData", (request, response) => {
  const WaxSQL = "SELECT * FROM `anisbeauty`.`waxing`";
  MySQL.query(WaxSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//DetanData Get
app.get("/detanData", (request, response) => {
  const DetanSQL = "SELECT * FROM `anisbeauty`.`detan` ";
  MySQL.query(DetanSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//HairTreatMent Get Data

app.get("/hairTreatment", (request, response) => {
  const HairSQL = "SELECT * FROM `anisbeauty`.`hairtreatment`";
  MySQL.query(HairSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//PedicureManicure

app.get("/pedicuremanicureData", (request, response) => {
  const PediSQL = "SELECT * FROM `anisbeauty`.`pedicuremanicure`";
  MySQL.query(PediSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "error" });
    }
    response.json(data);
  });
});

// HairCut Data

app.get("/hairCutData", (request, response) => {
  const HairSQL = "SELECT * FROM `anisbeauty`.`haircuts`";
  MySQL.query(HairSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//GEST MAKE OVER
app.get("/guestMakeOverData", (request, response) => {
  const guestMakeOverSQl = "SELECT * FROM `anisbeauty`.`guestmakeover`";
  MySQL.query(guestMakeOverSQl, (error, data) => {
    if (error) {
      return response.json({ Message: "ERROR" });
    }
    response.json(data);
  });
});

//Bridal Make Over

app.get("/bridalMakeOverData", (request, response) => {
  const BridalMakeOverSQL = "SELECT * FROM `anisbeauty`.`bridalmakeover`";
  MySQL.query(BridalMakeOverSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

//Saree Data Get

app.get("/sareesData", (request, response) => {
  const SareeSQL = "SELECT * FROM `anisbeauty`.`saree`";
  MySQL.query(SareeSQL, (error, data) => {
    if (error) {
      return response.json({ Message: "Error" });
    }
    response.json(data);
  });
});

app.listen(8080, () => {
  console.log("Server Running at http://localhost:8080/");
  MySQL.connect(function (error) {
    if (error) {
      throw error;
    }
    console.log("DataBase Connected Sucessfully");
  });
});
