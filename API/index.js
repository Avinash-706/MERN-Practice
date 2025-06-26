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

app.delete("/api/category/:id",(req,resp)=>{
  let id = req.params.id;
  if(!id){
    return resp.status(404).json({msg: 'Error: id is missing!'});
  }else{
    connection.query(`DELETE FROM master_category WHERE id = ${id}`,(err,result)=>{
      if(err){
        return resp.status(400).json({msg: 'Error in SQL!'});
      }else{
        return resp.status(200).json({msg: `One record deleted with id ${id}`});
      }
    })
  }
})


app.put("/api/category", (req, res) => {
    const body = req.body;
    const id = body.id;

    if(!id){
        return res.status(404).json({msg: "Error: Mandatory field is missing"});
    }
    else{
        connection.query(`UPDATE master_category SET topic_name = '${body.topic_name}', description = '${body.description}', is_enable = '${body.is_enable}' WHERE id = ${body.id}`,(error, result) => {
        if(error){
            return res.status(400).json({msg: "Error in updating MYSQL!"});
        }
        else{
            return res.status(200).json({msg : `One record updated with id ${id}`});
        }
    });
}
});




app.post("/api/category", (req, resp) => {
  let body = req.body;
  if (!body.topic_name) {
    return resp.status(404).json({ msg: "Mandatory field is missing" });
  } else {
    connection.query(
      `INSERT INTO master_category (topic_name, description, is_enable) VALUES ('${body.topic_name}','${body.description}','${body.is_enable}')`,
      (error, result) => {
        if (error) {
          return resp.status(400).json({ msg: "Error in SQL!" });
        } else {
          return resp
            .status(200)
            .json({ msg: "One record inserted successfully!" });
        }
      }
    );
  }
});



//new api for login & signup
app.post("/api/password", (req, resp) => {
  let body = req.body;
  if (!body.email || !body.password) {
    return resp.status(404).json({ msg: "Mandatory field is missing" });
  }
  else {
    connection.query(
      `SELECT email, password FROM login WHERE email = '${body.email}' AND password = '${body.password}'`,
      (error, result) => {
        if (error) {
          return resp.status(400).json({ msg: "Error in SQL!" });
        } else if (result.length === 0) {
          return resp.status(401).json({ msg: "Invalid credentials" });
        } else {
          return resp.status(200).json({ msg: "Login successful!" });
        }
      });
    }
});


app.post("/api/signup", (req, res)=>{
    let body = req.body;
    if(!body.firstname || !body.email || !body.password || !body.gender){
        return res.status(404).json({msg : "Mandatory Fieeld are missing"});
    }
    else{
        connection.query(`INSERT INTO signup (firstname, lastname, email, password, gender, mobile) VALUES ('${body.firstname}','${body.lastname}','${body.email}','${body.password}','${body.gender}','${body.mobile}')`,
        (error, result) => {
        if (error) {
          return res.status(400).json({ msg: "Error in SQL!" });
        } else if (result.length === 0) {
          return res.status(401).json({ msg: "Invalid credentials" });
        } else {
          return res.status(200).json({ msg: "Login successful!" });
        }
    }); 
    }
});


//end of new api for login and signup


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
