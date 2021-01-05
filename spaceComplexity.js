// space complexity 
//big O can still be used for space complexity
/* 
    primitive types (bool, numbers, undefined, null) are constant space
    strings require O(n) space where n is the length
    reference types take up O(n) where n is the length of the string or num of keys (obj)
*/ 

const sum = (arr) => {
    //there are only 2 variables init. 
    //they do not change based on the size of the input 
    //space is O(1)
    let total = 0;
    for(let i=0;i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

const Arrsum = (arr) => {
    //there is now an arr that gets bigger based on input 
    //space is O(n)
    let arrSum = []
    let total = 0;
    for(let i=0;i < arr.length; i++){
        total += arr[i];
        arrSum.push(total)
    }
    return total;
}