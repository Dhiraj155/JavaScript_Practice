//Sum of two arrays
//Get the sum of two arrays…actually the sum of all their elements and print the output. Note: Each array includes only integer numbers.

//Example 1:
//Input:
//let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

//Output:
//627

//Explanation:
//Individual sum of the elements of individual arrays are 276 and 351 respectively. Hence, the output the sum of these two 627.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

function Sum(arr){
	sum=0;
      for(let i=0;i<arr.length;i++){
        sum+=arr[i];
      }
      return sum;
    }
    let sum=0;
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
 console.log("Final_Sum: "+(Sum(arr_1) + Sum(arr_2)));