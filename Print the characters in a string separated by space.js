// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

    const userInput = [];
    
inp.on("line", (data) => {
    
    userInput.push( data);
    
});

inp.on("close", () => {
    
  
    let Name = userInput[0]; //getting input from userinput data // input===>guvi
    
    let splituserInput = Name.split(""); // first spliting the userinput
    
    let userInputwithspace = splituserInput.join(" "); // here joining space wih userInputwithspace
    
    console.log(userInputwithspace); // output===>g u v i
    



});
