let express = require("express");
let bodyParser = require("body-parser"); //bodyparser is the inbuilt middleware in nodejs
const connection = require("./connection.js");
const port = 3000;

let app = express();
app.use(bodyParser.json()); // Convert incoming data into json


//----------------------

app.get("/", (req, res) => {
    // your logic here
    res.send("Get Response is Working!!!");
});

app.get("/api/category", (req, res) =>{
    connection.query("SELECT id, topic_name, description, is_enable FROM master_category", (err, result)=>{
    if(err){
        res.status(400).json({msg: "Error in sql"});
    }
    else{
        res.status(200).json({msg: result})
    }
})
})

app.get("/api/category/:id", (req, res) => {
    const categoryId = req.params.id; //params dyanmanic changes in a website

    connection.query("SELECT id, topic_name, description, is_enable FROM master_category WHERE id = ?", [categoryId], (err, result) => {
            if (err) {
                res.status(400).json({ msg: "Error in SQL" });
            }
            else if (result.length === 0) {
                res.status(404).json({ msg: "Category not found" });
            }
            else {
                res.status(200).json({ category: result[0] });
            }
        });
});


//----------------------id, cate_name, description, is_enable


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});