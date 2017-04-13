/*Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:

String.prototype.split()*/

function titleCase(str) {
  var myStr = str.toLowerCase().split(" ");
  for(var i=0;i<myStr.length;i++){
    var char = myStr[i].charAt(0);
    myStr[i]=myStr[i].replace(char,function(char){
      return char.toUpperCase();
    });
  }
  return myStr.join(' ');
}

titleCase("I'm a little tea pot");
