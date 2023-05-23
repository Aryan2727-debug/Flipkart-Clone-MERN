const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config({path : './config.env'});

require("./database/db");
const DefaultData = require("./default.js");
const Router = require("./routes/route.js");

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use("/", Router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(req, res){
    res.sendFile(
      path.join(__dirname, "./client/build/index.html"),
      function(err){
        res.status(500).send(err);
      }
    );
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server started at Port ${port}`);
});

DefaultData();





