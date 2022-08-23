//CRUD our Objects
//CRUD our Objects

//Create a new object called person and give it properties like name, jobTitle, email, isVerified (boolean, value = false) (Create operation)
//Print only the name and the verified status of the person. (Read operation)
//Change the isVerified status to true. (Update operation)
//Remove the property name and add two new properties firstName and lastName (Delete operation)
//Print the final object person.
//Example 1:
//Input:
//let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}

//Output:
//John false { JobTitle: 'Developer', email: 'almabetter.com', isVerified: true, firstName: 'John', lastName: 'Snow' }

//Explanation:
//Performed the crud operations on the input by printing the isVerified property , deleting name property and by changing isVerified property to true, Hence, the output.

//Constraints:
//Restrict to input format only and update details as per expected output to get your code evaluated.

//ans--

let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}

console.log(person.name)
console.log(person.isVerified);
person.isVerified = true;
delete person.name;
person.firstName = 'John';
person.lastName = 'Snow';
console.log(person);