// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


// var uniqueInOrder=function(iterable){
//     if (typeof(iterable) == "string"){
//       newWord = iterable.split("")  
//     } else {
//       newWord = iterable
//     }
//     newArray = [];
//       for (i=0; i<newWord.length; i++){
//           if (newWord[i] != newWord[i+1]){
//             newArray.push(newWord[i])
//           }
//     }
//     return newArray;      
// }

// Solution 2
// var uniqueInOrder=function(iterable){
//     newArray = [];
//       for (i=0; i<iterable.length; i++){
//           if (iterable[i] != iterable[i+1]){
//             newArray.push(iterable[i])
//           }
//     }
//     return newArray;      
// }

// Solution 3
var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var previous
    var newArray = []
    
    for (var v of iterable) {
      if(previous !== v) newArray.push(previous = v)
    }
    
    return newArray
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))