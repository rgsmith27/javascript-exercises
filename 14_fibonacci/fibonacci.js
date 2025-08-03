const fibonacci = function(num) {
   let sequence = [0, 1, 1];
   if(num < 0){
    return("OOPS");
   }
   while(sequence.length - 1 < num){
    next = sequence[sequence.length - 1] +  sequence[sequence.length - 2];
    sequence.push(next);
   }
   return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
