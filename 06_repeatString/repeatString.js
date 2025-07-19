const repeatString = function(string, repeat) {
    if (repeat < 0){
        return 'ERROR';
    }
    var resultString = '';
    for(let i = 0; i < repeat; i++){
        resultString = resultString + string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
