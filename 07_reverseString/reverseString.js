const reverseString = function(word) {
    wordArray = word.split('');
    reverseWord = "";
    for(let i = wordArray.length; i--; i > -1){
        reverseWord = reverseWord + wordArray[i];
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
