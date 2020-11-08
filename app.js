const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const logger = require("morgan");
const configurePassport = require("./configurePassport.js");
const passportRoutes = require("./routes/users.js");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "front/build")));

configurePassport(app);

app.use("/", indexRouter);
app.use("/", passportRoutes);

module.exports = app;
