/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus 'A'↔
'N', 'B'↔
'O'
and so on.

Write a
function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

    String.prototype.charCodeAt()
String.fromCharCode()
*/

function rot13(str) {

    return str.split('').map(getShifted).join('');

    function getShifted(letter) {
        letter = letter.toUpperCase();
        if (/[A-Z]/.test(letter)) {
            var charCode = letter.charCodeAt(0) + 13;
            return String.fromCharCode(charCode > 90 ? 64 + charCode - 90 : charCode);
        } else {
            return letter;
        }
    }
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
