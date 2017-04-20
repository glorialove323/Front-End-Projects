/*Missing letters
Find the missing letter in the passed letter range and
return it.

If all letters are present in the range,
    return undefined.

String.prototype.charCodeAt()
String.fromCharCode()
*/


function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}

fearNotLetter("abce");
