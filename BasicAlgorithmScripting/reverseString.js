// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Global String Object
// String.prototype.split()
// Array.prototype.reverse()
// Array.prototype.join()


function reverseString(str) {
    var arr = [];
    arr = str.split('');
    arr.reverse();
    return arr.join('');
}

reverseString("hello");
