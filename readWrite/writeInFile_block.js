let fs = require('fs');
let readlineSync = require('readline-sync');

let content = readlineSync.question("Enter Content ---  ");

// Blocking Code
function writeInFileSync() {
    console.log("\nBLOCKING CODE - Start");
    fs.writeFileSync("./data/content1.txt", content, "utf-8");
    console.log("Content written successfully in content1.txt");
    console.log("\nBLOCKING CODE - End");
}
writeInFileSync();

// Non-Blocking Code
function writeInFileASync() {
    console.log("\nNON-BLOCKING CODE - Start");
    fs.writeFile("./data/content2.txt", content, "utf-8", (error) => {
        if (error) {
            console.log("Error in writing!", error);
        } else {
            console.log("Content written successfully in content2.txt");
        }
    });
    console.log("\nNON-BLOCKING CODE - End");
}

console.log("\n------------------------");
writeInFileASync();
