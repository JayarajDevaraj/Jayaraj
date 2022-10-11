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
    
  

let Name = userInput[0]; //======< getting input from userInput ====>guvi
    
    let splituserInput = Name.split(""); //=======> Splting the word for add comma in next line(splited here)
    
    let userInputwithcomma = splituserInput.join(","); //=====> Adding comma in every single letter after split word.
    
    console.log(userInputwithcomma); //========> output will be ===> g,u,v,i
    

});


