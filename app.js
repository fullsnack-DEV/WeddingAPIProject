const express = require("express");

const app = express();

const wedrouter = require("./Routes/weddroutes");

//imorting the Routers // Mounting the router

//Now we will Mount Our Routers
app.use("/api/v1/weddings", wedrouter);

module.exports = app;
