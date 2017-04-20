/*Finders Keepers
Create a
function that looks through an array(first argument) and returns the first element in the array that passes a truth test(second argument).

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

Here are some helpful links:

    Array.prototype.filter()
Run tests(ctrl + enter)
*/


function findElement(arr, func) {
    filterArr = arr.filter(func);
    return filterArr[0];
}

findElement([1, 2, 3, 4], function(num) {
    return num % 2 === 0; });
