const palindromes = function (word) {
    word = word.replace(/[!?.,;: ]/g, '').toLowerCase();
    let forwardPointer = 0;
    let backwardPointer = word.length - 1;
    while(backwardPointer > forwardPointer){
        let backwardChar = word.charAt(backwardPointer);
        let forwardChar = word.charAt(forwardPointer);
        if(backwardChar != forwardChar){
            return false;
        }
        backwardPointer -= 1;
        forwardPointer += 1;
    }
    return true;
};

palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
