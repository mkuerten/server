const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const voltages = {};

// Handle GET requests to /voltages
app.get("/voltages", (req, res) => {
  res.json({ voltages: voltages });
});

// Handle POST requests to /voltages
app.post("/voltages", (req, res) => {
  const voltage = req.body.voltage;
  console.log(voltage);
  console.log(req.body);
  const id = Date.now().toString(); // Generate a unique ID for the voltage entry
  voltages[id] = voltage;
  console.log(voltages);
  res.json({ message: `Voltage added successfully - ${id}` });
});

// Start the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});