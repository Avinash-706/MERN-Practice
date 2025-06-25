let mysql = require("mysql2");

let connectionString = ({
    host : "localhost",
    user : "root",
    password : "Asansol@0341",
    database: "online_quiz"

});

let connection = mysql.createConnection(connectionString);

connection.connect((err)=>{
    if(err){
        console.log("Error: ", err);
    }
    else{
        console.log("Database Connected Successfully!");
    }
})

module.exports = connection;