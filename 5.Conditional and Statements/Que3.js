//If Number
//Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.

//Example 1:
//Input:
//var var1 = 50; var var2 = "42F";

//Output:
//50 is a valid number. 42F is not a number.

//Explanation:
//Out of 50 and 42F, 50 is number which is check by isNaN() method, hence, the output.

//Constraints:
//Restict to variables that are given in input format to get your code evaluated.

//ans--


var var1 = 50;
var var2 = "42F";

if(isNaN(var1)){
    console.log(var1+ " is not a number.")
}else {
    console.log(var1+ " is a valid number.")
}

if(isNaN(var2)){
    console.log(var2+ " is not a number.")
}else {
    console.log(var2+ " is a valid number.")
}