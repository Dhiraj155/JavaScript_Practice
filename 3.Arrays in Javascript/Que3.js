//Filtering ArrayMedium
//Write JavaScript statements that will produce the output mentioned in output format from array in input format.

//Example 1:
//Input:
//const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

//Output:
//["exuberant", destruction", "present"]

//Explanation:
//The output shows that the array has been filtered with required conditions.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = inputWords.filter(word => word.length > 6);
console.log(longWords);