/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Here are some helpful links:

String.prototype.split()
String.length*/

function findLongestWord(str) {
    var myStr = str.split(" ");
    var long = 0;
    for (var i = 0; i < myStr.length; i++) {
        if (myStr[i].length > long) {
            long = myStr[i].length;
        }
    }
    return long;

    // second method

     return  myStr.map(function(val){
     return val.length;
   }).reduce(function(p,c){
     return Math.max(p,c);
   });
}

findLongestWord("The quick brown fox jumped over the lazy dog");
