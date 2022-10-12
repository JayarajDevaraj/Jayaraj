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
    
     
    function factorial(n){
        
    let answer = 1;
    
    if (n == 0 || n == 1){
        
    return answer;
    
  } else{
      
    for(var i = n; i >= 1; i--){
        
     answer = answer * i;
     
    }
    return answer;
  }  
}
    let n = userInput[0];
    
    answer = factorial(n);
    
    console.log(answer);
    
});
