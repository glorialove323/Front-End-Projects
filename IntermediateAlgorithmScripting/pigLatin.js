/*Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant(or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way"
to the end.

Input strings are guaranteed to be English words in all lowercase.


Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + 'way';

    } else {

        // Find how many consonants before the first vowel.
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLatin;
}


translatePigLatin("consonant");
