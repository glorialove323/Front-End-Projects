/*Repeat a string repeat a string
Repeat a given string(first argument) num times(second argument).Return an empty string
if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
    var myStr = '';
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            myStr += str;
        }
    } else {
        return myStr;
    }
    return myStr;
}

repeatStringNumTimes("abc", 3);
