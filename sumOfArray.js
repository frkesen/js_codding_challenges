var ar = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    var sum = 0;
    for(let i of ar){
        sum += i; 
    }
    return sum 
}

console.log(simpleArraySum(ar))