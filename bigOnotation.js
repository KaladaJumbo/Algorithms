 //big O notation is a way to quantify how efficient 
 //your program runs. 

 //allows talking of a functions runtime grows when the input grows

 //big O is seen in worse cases. 

 const addUpTo = (n) => {
     //no matter the input, this will only run once 
     //O(1)
    return n * (n+1)/2;
 }

 const addUpToSecond = (n) => {
     //based on the input this will run more times the bigger the input gets. 
     //O(n)
    let total = 0;
    for (let i = 0; i == n; i++){
        total += 1;
    }
    return total
 }  

 const pairs = () => {
     // nested loops are O(n) * O(n) which is O(n^2)
     let i = 0;
     while(i < 10){
        let z = 0;
        while(z < 0){
            console.log(z);
            z++;
        }
        i++;
    } 
 }

 //rule of thumb of big O
 /* 
    constants do not matter 
        O(500) = O(1)
        O(13n^2) = O(n^2)
    small terms dont matter 
        O(n^2+5n+8) = O(n^2)
    arithmetic operations are constant and do not matter 
    variable assignment is constant runtime as well 
    accessing elements in an array or key in object is constant 
    in a loop, the complexity is the length of the loop multiplied by what happens in it. 
    
 */

 //space complexity