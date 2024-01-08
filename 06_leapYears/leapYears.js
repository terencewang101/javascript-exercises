const leapYears = function(num) {
    return !(num % 4) && ((num % 100 !== 0) || !(num % 400));
};

// Do not edit below this line
module.exports = leapYears;
