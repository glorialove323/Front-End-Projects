/*Steamroller
Flatten a nested array.You must account
for varying levels of nesting.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

Here are some helpful links:

    Array.isArray()
*/

function steamrollArray(arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
    }, []);
}

steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
