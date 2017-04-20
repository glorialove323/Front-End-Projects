/*Convert HTML Entities
Convert the characters & , < , > , " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

Here are some helpful links:

    RegExp
HTML Entities
String.prototype.replace()
*/


function convertHTML(str) {
    //   var temp=str.split('');

    //   for(var i=0;i<temp.length;i++){
    //     switch(temp[i]){
    //       case '<':
    //         temp[i] = '&lt;';
    //         break;
    //       case '&':
    //         temp[i] = '&amp;';
    //         break;
    //       case '>':
    //         temp[i] = '&gt;';
    //         break;
    //       case '"':
    //         temp[i] = '&quot;';
    //         break;
    //       case "'":
    //         temp[i] = "&apos;";
    //         break; 
    //     } 
    //   }
    //   temp = temp.join('');
    //   return temp;
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return str;
}

convertHTML("Dolce & Gabbana");
