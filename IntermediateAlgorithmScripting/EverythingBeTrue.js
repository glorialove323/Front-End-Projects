/*Everything Be True
Check
if the predicate(second argument) is truthy on all elements of a collection(first argument).

Remember, you can access object properties through either dot notation or[] notation.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.
*/


function truthCheck(collection, pre) {
    var counter = 0;
    for (var c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    return counter == collection.length;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
