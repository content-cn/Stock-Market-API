const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;

// Enable CORS for all requests
app.use(cors());

// Replace this with your own JSON data
const jsonData = require("./profiledata.json");
const jsonData2 = require("./stocksdata.json");
const jsonData3 = require("./stocksstatsdata.json");

// Endpoint to serve JSON data
app.get("/api/profiledata", (req, res) => {
  res.json(jsonData);
});

app.get("/api/stocksdata", (req, res) => {
  res.json(jsonData2);
});

app.get("/api/stocksstatsdata", (req, res) => {
  res.json(jsonData3);
});
// Health check
app.get("/", (req, res) => {
  res.send("JSON API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
