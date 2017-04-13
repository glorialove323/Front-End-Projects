/*Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Array.prototype.slice()
Array.prototype.splice()
*/
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany>=arr.length){
    return [];
  }else if(howMany<=0){
    return arr;
  }
else{
  return arr.slice(howMany);
}
}

slasher([1, 2, 3], 2);
