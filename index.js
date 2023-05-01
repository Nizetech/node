const fs = require("fs");

// This is how to read from File
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// This is how to write to File
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");
