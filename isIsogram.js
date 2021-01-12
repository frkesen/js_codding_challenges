// Solution 1
// function isIsogram(str){
//     const word = str.split("");
//     const isIsogram = word.every((l,i) => word.indexOf(l) == i);
//     return isIsogram
// }  

// Solution 2
function isIsogram(str){
    const wordLength = new Set(str.split("")).size;
    if (str.length == wordLength){
        return true
    } else return false
}


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moses"));
console.log(isIsogram("hello"));
console.log(isIsogram("world"));