const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const User = require('../database/models/User');
const Character = require('../database/models/Characters');

const app = express();

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(express.static("public"));
app.disable('x-powered-by');

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

 app.post(User.signup);
 app.post(User.signin);
 app.post(Character.createChar);
 app.get(Character.getChar);

 app.listen(PORT, () => {
   console.log(`Port ${PORT} is boring`);
 })