// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

    const userInput = [];
    
    
inp.on("line", (data) => {
    
    userInput.push(data);
    
});

inp.on("close", () => {
    
    let areaofET = userInput[0];
    
    let a = userInput[0];
    
    areaofET = 1/4 *Math.sqrt(3) * a * a;
    
    console.log(areaofET.toFixed(2));
   
    
});