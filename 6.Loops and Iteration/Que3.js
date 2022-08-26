//Reverse order of elements
//Using for loop, print the elements of an array in reverse order.

//Example 1:
//Input:
//let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];

//Output:
//true 3.5 be false cannot true 9 what 43

//Explanation:
//We have to print the elements in the reverse order of the order they are present in the given array. In the output, the elements of the array are reversed.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];
    for(let i=arr.length - 1;i>= 0;i--){
    console.log(arr[i]);
    }