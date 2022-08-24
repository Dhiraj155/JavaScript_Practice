//Joining elements in Array
//Write a simple JavaScript program to join all elements of the following array into a string, once simply and once with the '+' sign in between the elements.

//Example 1:
//Input:
//let myColor = ["Red", "Green", "White", "Black"];

//Output:
//Red,Green,White,Black Red+Green+White+Black

//Explanation:
//Performed join operation on the elements of array first without anything between elements and then with '+' sign in between.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//Ans--

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));