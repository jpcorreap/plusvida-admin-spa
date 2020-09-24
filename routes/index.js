const express = require("express");
const router = express.Router();
const db = require("../db/FirestoreUtils.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/setup/registro", function (req, res, next) {
  db.utils.setupRegistro();
  res.render("index", { title: "Listo el pollo" });
});

router.get("/setup/epsmunicipios", function (req, res, next) {
  db.utils.setupEPSandMunicipios();
  res.render("index", { title: "Listo el segundo pollo" });
});

module.exports = router;
