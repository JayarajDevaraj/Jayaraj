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
    
    let C = userInput[0];
   
    let F = C * 9/5 + 32;
   
    let = parseInt(C);
   
    let = parseInt(F);
   
    console.log(F);
   
    
    
});