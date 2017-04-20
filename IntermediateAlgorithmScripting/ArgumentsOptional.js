/*Arguments Optional
Create a
function that sums two arguments together.If only one argument is provided, then
return a
function that expects one argument and returns the sum.

For example, addTogether(2, 3) should
return 5, and addTogether(2) should
return a
function.

Calling this returned
function with a single argument will then
return the sum:

    var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn 't a valid number, return undefined.

Remember to use Read - Search - Ask
if you get stuck.Try to pair program.Write your own code.

Here are some helpful links:

    Closures
Arguments object
*/

function addTogether() {
    var args = new Array(arguments.length);
    //Storing the arguments in an array
    for (var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
    }
    //Check for the arguments length
    if (args.length == 2) {
        //If there are two arguments,check for the type of both arguments
        //Use typeof to check the type of the argument(both should be numbers)
        if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
            return undefined;
        }
        return args[0] + args[1];
    }
    //When only one argument is provided
    if (args.length == 1) {
        a = args[0];
        //Check the  argument using typeof 
        if (typeof a !== 'number') {
            return undefined;
        } else {
            //Making use of closures 
            return function(b) {
                //Checking the second argument 
                if (typeof b !== 'number') {
                    return undefined;
                } else
                    return a + b;
            };
        }
    }
}
addTogether(2, 3);
