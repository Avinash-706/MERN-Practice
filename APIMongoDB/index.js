let express = require('express');
let mongoose = require('mongoose');
let app = express();
const PORT = 3000;

mongoose
    .connect("mongodb://localhost:27017/Avi")
    .then(()=> console.log("Mongo Database Connected"))
    .catch((err)=>console.log("Error in Connection !"));


//---------------------------------------------------------

app.get("/", (req, res)=>{
    res.send("<H1> Hello World!! <H1>");
})


//DEFINING SCHEMA
app.get("/user", )





//---------------------------------------------------------

app.listen(PORT, ()=>{
    console.log(`Application is running on port ${PORT}`)
})