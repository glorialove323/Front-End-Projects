/*Inventory Update
Compare and update the inventory stored in a 2 D array against a second 2 D array of a fresh delivery.
Update the current existing inventory item quantities( in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var flag = 0;
    arr2.forEach(function(item) {
        flag = 0;
        arr1.forEach(function(list) {
            if (item[1] === list[1]) {
                list[0] += item[0];
                flag = 1;
            }
        });

        if (flag === 0) {
            arr1.push(item);
        }
    });


    return arr1.sort(function(a, b) {
        return a[1] > b[1] ? 1 : -1;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
