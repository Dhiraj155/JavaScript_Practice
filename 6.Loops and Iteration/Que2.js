//Printing Even Numbers
//Using a for loop print all even numbers up to and including n and don’t include 0.

//Example 1:
//Input:
//let n = 22;

//Output:
//2 4 6 8 10 12 14 16 18 20 22

//Explanation:
//We have to print all even numbers excluding 0 to the number. Hence, the output where even numbers are printed upto 22 including 22 but excluding 0.

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

function PrintEvenNumber(n){
    for(let i=1;i<=n;i++){
      if (i % 2 == 0) {
          console.log(i);
  }
    }
  }
  let n=22;
  PrintEvenNumber(n);