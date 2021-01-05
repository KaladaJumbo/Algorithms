 //big O notation is a way to quantify how efficient 
 //your program runs. 

 //allows talking of a functions runtime grows when the input grows

 const addUpTo = (n) => {
     //no matter the input, this will only run once 
    return n * (n+1)/2;
 }

 const addUpToSecond = (n) => {
     //based on the input this will run more times the bigger the input gets. 
    let total = 0;
    for (let i = 0; i == n; i++){
        total += 1;
    }
    return total
 } 