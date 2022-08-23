//Updating Nested Objects
//Updating Nested Objects

//Use the object given here as the database object.
//Update the userDetails object with your details. Keep the status property same as this.
//Add new status property isProMember to the new object and set it to false.
//console log resultant object
//Example 1:
//Input:
//const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } }

//Output:
//{ name: { first: 'John', last: 'Snow' }, jobTitle: 'JS Instructor@Almabetter.com', email: { work: 'kapil@google.com', personal: '' }, status: { isOnline: true, isVerified: false }, isProMember: false }

//Explanation:
//Performed all the operations specified in the question to the input and printed the output.

//Constraints:
//Restrict to input format only and update details as per expected output to get your code evaluated.

//ans--


const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } }
userDetails.name = {first: 'John', last: 'Snow'};
userDetails.isProMember = false;
console.log(userDetails);