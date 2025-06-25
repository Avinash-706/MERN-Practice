let express = require("express");
let bodyParser = require("body-parser"); // body-parser is the inbuilt middleware in nodejs
const connection = require("./connection.js");
const port = 3000;

let app = express();
app.use(bodyParser.json()); // Convert incoming data into JSON

//----------------------

app.get("/", (req, res) => {
    res.send("Get Response is Working!!!");
});

app.get("/api/category", (req, res) => {
    connection.query("SELECT id, topic_name, description, is_enable FROM master_category", (err, result) => {
        if (err) {
            res.status(400).json({ msg: "Error in SQL" });
        } else {
            res.status(200).json({ msg: result });
        }
    });
});

app.post("/api/category", (req, res) => {
    console.log("Raw Request Body:", req.body);

    const body = req.body;

    if (!body.topic_name) {
        return res.status(400).json({ msg: "Mandatory field is missing" });
    }

    const sql = `INSERT INTO master_category (topic_name, description, is_enable) VALUES (?, ?, ?)`;
    const values = [body.topic_name, body.description || null, body.is_enable || "true"];

    connection.query(sql, values, (error, result) => {
        if (error) {
            return res.status(400).json({ msg: "Error in SQL", error });
        } else {
            return res.status(201).json({ msg: "One Record Inserted Successfully!" });
        }
    });
});



app.get("/api/category/:id", (req, res) => {
    const categoryId = req.params.id;

    connection.query("SELECT id, topic_name, description, is_enable FROM master_category WHERE id = ?", [categoryId], (err, result) => {
        if (err) {
            res.status(400).json({ msg: "Error in SQL" });
        } else if (result.length === 0) {
            res.status(404).json({ msg: "Category not found" });
        } else {
            res.status(200).json({ category: result[0] });
        }
    });
});

//----------------------

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
