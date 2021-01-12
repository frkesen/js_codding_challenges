function isIsogram(str){
    const word = str.split("");
    const isIsogram = word.every((l,i) => word.indexOf(l) == i);
    return isIsogram
}  




console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moses"));
console.log(isIsogram("hello"));
console.log(isIsogram("world"));