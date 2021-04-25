const express = require("express");

//importing the all the route responses

const weddcontroller = require("../controllers/weddcontrollers");

//Mounting a router in the application

const router = express.Router();

router.route("/").get(weddcontroller.getallweddingplaces);

router.route("/:id").get(weddcontroller.getWeddingplace);

module.exports = router;
