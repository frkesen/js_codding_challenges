let str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

// Solution 1
// function removeDuplicateWords() {
//     const word = [...new Set(str.split(" "))].join(' ');
//     return word;
// }

// Solution 2
function removeDuplicateWords() {
    const words = str.split(" ");
    newWords = [];
    for (word of words) {
        if (!newWords.includes(word))
            newWords.push(word);
}
    
    return newWords.join(" ");
}

console.log(removeDuplicateWords()) ;