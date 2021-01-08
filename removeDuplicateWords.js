let str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";

function removeDuplicateWords() {
    const word = [...new Set(str.split(" "))].join(' ');
    return word;
}


console.log(removeDuplicateWords()) ;