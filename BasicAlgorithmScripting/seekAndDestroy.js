/*Seek and Destroy
You will be provided with an initial array(the first argument in the destroyer
    function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

Arguments object
Array.prototype.filter()
*/


function destroyer(arr) {
    var mustRemove = [];
    for (var i = 0; i < arguments.length; i++) {
        mustRemove.push(arguments[i]);
    }
    return arr.filter(function(item) {
        return mustRemove.indexOf(item) >= 0 ? false : true;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
