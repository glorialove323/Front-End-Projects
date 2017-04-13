/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
  return arr.filter(function(x){
    return x;
  });
}

bouncer([7, "ate", "", false, 9]);
