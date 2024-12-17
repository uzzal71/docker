const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

const app = express();
require("dotenv").config();
require("./Models/db")

const PORT = process.env.PORT || 3002;

app.get("/ping", (req, res) => {
  res.send(`Ping successfully`);
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
