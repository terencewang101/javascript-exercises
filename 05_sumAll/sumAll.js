const sumAll = function(int1, int2) {
    // create new variable to hold sum
    let total = 0;
    // run a loop that increments from int1 to int2
    for (i = int1; i <= int2; i++) {
        // for every integer less than int2, add into sumAll
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
