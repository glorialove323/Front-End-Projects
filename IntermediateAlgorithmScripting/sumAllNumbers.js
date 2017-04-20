// Sum All Numbers in a Range
// We 'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Math.max()
// Math.min()
// Array.prototype.reduce()



function sumAll(arr) {
    // 这是我自己写的，优点繁琐
    //   var sum=0;
    //   if(arr[0]<arr[1]){
    //     sum = arr[0];
    //     for(var i=arr[0]+1;i<=arr[1];i++){
    //       sum+=i;
    //     }
    //     return sum;
    //   }else{
    //     sum=arr[0];
    //     for(var j=arr[0]-1;j>=arr[1];j--){
    //       sum+=j;
    //     }
    //     return sum;
    //   }

    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

}

sumAll([1, 4]);
