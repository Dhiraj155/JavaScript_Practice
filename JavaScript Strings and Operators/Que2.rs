//String AssignmentMedium
//Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following

//Console log the length of string
//Extract "AlmaBetter" from string using slice() and console log it
//Replace "Javascript" with "Web3.0" in test and console log it
//Convert test to upper case using built in function and console log it
//Concat "Web3.0 is future" to test and console log it
//Example 1:
//Input:
//var test = "Learning Javascript with AlmaBetter"

//Output:
//35 AlmaBetter Learning Web3.0 with AlmaBetter LEARNING JAVASCRIPT WITH ALMABETTER Learning Javascript with AlmaBetterWeb3.0 is future

//Explanation:
//Performed the functions specified in the question in order. Hence, the output.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

let test = "Learning Javascript with AlmaBetter";
console.log(test.length);
console.log(test.slice(25,35));
console.log(test.replace("Javascript", "Web3.0"));
console.log(test.toUpperCase());
console.log(test.concat("Web3.0 is future"));