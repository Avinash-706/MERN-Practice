let fs = require('fs');

// Blocking Code
function readFileSync(){
    console.log("Start");
    const content = fs.readFileSync("./data/content1.txt", "utf-8");
    console.log("Content :-", content);
    console.log("End");
}
readFileSync();


//Non-Blocking Code
function readFileASync(){
      console.log("Start");
      fs.readFile("./data/content2.txt", "utf-8", (error, result)=> {
        if(error)   console.log("Error in reading File");
        else    console.log("Content : -" , result);
      }
    );
    console.log("End");
}
console.log(" --------------- ");
readFileASync();


