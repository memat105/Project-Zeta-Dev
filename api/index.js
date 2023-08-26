// !IMPORTANT!
const _dotenv = require('dotenv');
_dotenv.config( { path : "creds.env"} );

//  Dependencies
const _path = require("path");
// const _bodyParser = require("body-parser");
// const _jwt = require('jsonwebtoken');
// const _nodemailer = require("nodemailer");
const flash = require('connect-flash')
// const { json } = require("body-parser");
const express = require('express');
// const fileUpload = require("express-fileupload");
// const { v4: uuidv4 } = require("uuid");
// const fs = require('fs');
// const async = require('async');
// const csvtojson = require('csvtojson');
// const _bcryptjs = require('bcryptjs');
const app = express();

//  Config
// app.use(fileUpload());
// app.use(_bodyParser.urlencoded({ extended: true }));
// app.use(_bodyParser.json());
app.use(express.static(_path.join(__dirname, '../public')));
app.use(express.static(_path.join(__dirname, '../views')));
app.set("view engine", "ejs",);
app.set("views", [_path.join(__dirname, '../views'), _path.join(__dirname, '../views/home'), _path.join(__dirname, '../views/login-system'), _path.join(__dirname, '../views/navigation'), _path.join(__dirname, '../views/sys-users'),_path.join(__dirname, '../views/audit-log')]);
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use((req, res, next)=> { res.locals.messages = require("express-messages")(req, res); next();});
app.listen(process.env.PORT , () => console.log("LISTENING TO PORT : "+process.env.PORT));
app.use(function(err, req, res, next) { res.status(err.status || 500); res.send(err);});

const _home = require('../routes/home')
app.use('/', _home);