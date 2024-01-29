const express = require("express");
const routes = express.Router();
const converter = require("../middleware/converter");
const a2 = require("../function/sendData");
const html = require("../html/index");
const responsedata = require("../html/secondindex");
let data = "";

routes.use("/", converter, (req, res) => {
  if (req.userdata == "home" || req.userdata == "") {
    res.send(html);
 
  } else {
    data = a2(req.userdata);
    if (data[0]["n"] >= 2) {
      res.send(responsedata(data));
    } else {
      res.sendStatus(404);
    }
  }
});

module.exports = routes;
