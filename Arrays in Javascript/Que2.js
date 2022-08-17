//Uppercase Array
//Create a new array whose elements is in uppercase of words present in the original array.

//Example 1:
//Input:
//let strings = ["avengers", "captain america", "ironman", "black panther"];

//Output:
//["AVENGERS","CAPTAIN AMERICA","IRONMAN","BLACK PANTHER"]

//Explanation:
//Converted every element of the array to uppercase and stored in the array, hence the output.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

let strings = ["avengers", "captain america", "ironman", "black panther"];
console.log(strings.map(string => string.toUpperCase()));