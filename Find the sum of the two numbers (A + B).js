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
   
  let A = userInput[0];
 
    let B = userInput[1];
   
   
   let first = +A;
   
   let Second = +B;
    
    console.log(first + Second);

});

