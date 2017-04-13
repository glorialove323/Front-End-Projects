/*Chunky Monkey
Write a

function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two - dimensional array.

Here are some helpful links:

    Array.prototype.push()
Array.prototype.slice()
*/

function chunkArrayInGroups(arr, size) {
    var resultArr = [];
    var tempArr = [];
    var chunk = 0;
    for (var i = 0; i < arr.length; i++) {
        tempArr.push(arr[i]);
        chunk++;
        if (chunk == size || i == arr.length - 1) {
            resultArr.push(tempArr);
            tempArr = [];
            chunk = 0;
        }
    }
    return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
