const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
  

mongoose.connect("mongodb://localhost:27017/restaurants-db",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
  }).then(()=>{
    let server = app.listen(8080, function () {
        let host = server.address().address
        let port = server.address().port
        console.log("server is running on port "+ port)
    })
})

module.exports = app;
require("./src/Routes/index.js");

