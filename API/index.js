let mysql = require("./connection.js");
let express = require("express");
let bodyParser = require("body-parser"); //bodyparser is the inbuilt middleware in nodejs

let app = express();
app.use(bodyParser.json()); // Convert incoming data into json

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
