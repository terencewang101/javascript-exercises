const repeatString = function(string, num) {
    let mergedString = "";
    if (num < 0) return "ERROR";
    else for (i = 0; i < num; i++) {
        mergedString += string;
    }
    return mergedString;
};

// Do not edit below this line
module.exports = repeatString;
