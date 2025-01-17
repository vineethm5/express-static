require("dotenv").config();
const express = require("express");
const app = express();
const path=require("path");
const bodyParser = require("body-parser");
const dbconnection=require("./config/PageConfig");
const PORT = process.env.PORT ||  8001;

dbconnection();
// app.use(express.static(path.join(__dirname,"public")));
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",require("./router/pageRouter"));

app.listen(PORT,(err)=> {
    if(!err)
    {
        console.log(`Server running on the port ${PORT}`);
    }
})

