const removeFromArray = function(array, deleted) {
    //run through each item in the deleted array
    for (i = 0; i < deleted.length; i++) {
        // for each deleted item, run through each item in array and check for matching items
        // identify the array index of said matching item
        const index = array.indexOf(deleted[i]);
        // splice it out of array
        if (~index) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


array = [1, 2, 3, 4]
deleted = [3, 4]