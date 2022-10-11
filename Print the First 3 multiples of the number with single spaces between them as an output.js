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
   let number =[];
  
  number = parseInt.number;
  
   console.log(userInput[0] * 1 , userInput[0] * 2 , userInput[0] * 3);

});

