// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    if (typeof(iterable) == "string"){
      newWord = iterable.split("")  
    } else {
      newWord = iterable
    }
    newArray = [];
      for (i=0; i<newWord.length; i++){
          if (newWord[i] != newWord[i+1]){
            newArray.push(newWord[i])
          }
    }
    return newArray;   
    
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))