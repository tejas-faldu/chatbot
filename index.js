
const express = require('express');
const mysql = require('mysql')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//current time data

app.get('/', (req, res) => {
  res.send('helloo');
});



app.listen(3333, () => console.log("server start"));