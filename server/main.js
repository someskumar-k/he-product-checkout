const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();


const port = process.env.PORT || 3051

app.use(cors())
app.use(bodyParser.json({limit:'5mb'}));
app.use(express.static(path.join(__dirname, 'client')));
app.options("*",function(req,res,next){
  res.status(200).send()
})
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.listen(port,() => console.log("Server is running on "+port))
