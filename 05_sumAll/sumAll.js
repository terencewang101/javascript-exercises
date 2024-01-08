const sumAll = function(int1, int2) {
    // check which argument is larger value
    if (int1 > int2) {
        bigInt = int1; 
        smallInt = int2;
    } else {
        bigInt = int2; 
        smallInt = int1;
    }
    // create new variable to hold sum
    let total = 0;
    // run a loop that increments from int1 to int2
    for (i = smallInt; i <= bigInt; i++) {
        // for every integer less than int2, add into sumAll
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
