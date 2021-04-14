const express = require("express");

const app = express();

// import { router } from "./Routes/tourroutes";

const wedrouter = require("./Routes/weddroutes");

//imorting the Routers

//Now we will Mount Our Routers
app.use("/api/v1/weddings", wedrouter);

module.exports = app;
