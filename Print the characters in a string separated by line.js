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
   
    let Name = userInput[0];

    for(i = 0; i<= Name.length-1; i++)
{
    console.log(Name[i]);
}

});

