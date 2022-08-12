//Type Conversion
//Type conversion

//Implicit type conversion: Declare string and add integer. Notice how javascript implicitly converts integer to string.
//Explicit type conversion: Declare string and add integer by explicitly converting string to integer.
//Example 1:
//Input:
//let number = "777"; let integer = 8;

//Output:
//"7778" 785

//Explanation:
//Adding firstly the number which is a string to a integer then in second one firstly converted string into integer and the added the number and integer, hence, the output.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//Ans--

let result;
let result2;
result =  "777" + 8;
console.log(result);
result2 = Number("785");
console.log(result2);