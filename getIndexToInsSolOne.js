/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution One
function getIndexToIns(arr, num) {                  //1
    arr.sort(function(a, b) {                       //2
      return a - b;                                 //3
    });

for (var i = 0; i < arr.length; i++) {              //4
      if (arr[i] >= num) return i;                  //5
    }
    return arr.length;                              //6
  }
  
console.log(getIndexToIns([5, 3, 20, 3], 22));
//Output = 2 
 
 



//Notes
/*
//1
function which takes in two arguments:
arg1 = Array
arg2 = Number/Integer

//2, //3
The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

The sort method will return an array. By returning a - b the sorted array will be returned from lowest to highest. 

The sorted array will look like this [3, 3, 5, 20]

//4, //5

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

[initialization];   = var i = 0;
[condition];        = i < arr.length;
[final-expression]; = i++;

Source - [https://devdocs.io/javascript/statements/for]

The sorted array ([3, 3, 5, 20]) will now be fed into the for loop and be iterated over. 

The for loop will run for the length of the sorted array (4 items. Max index 3)

The if condition will check to see if the current number in the sorted array is greater than or equal to the num input (5 in this case). When the value (arr[i]) matching the num input is found the index position of that value is returned.  

//6
This return statement is in place in the event the input array is empty or the num input is equal to 1

*/

