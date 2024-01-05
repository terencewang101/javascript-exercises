const removeFromArray = function(array, deleted) {
    
        const newArray = array.filter(function (item) {
            return item !== deleted;
        })
        return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
