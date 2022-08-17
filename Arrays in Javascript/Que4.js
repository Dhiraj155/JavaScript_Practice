//Using Map() method
//Use the .map() method on the heros array to return a new array.

//The new array should rename the 'name' key to 'hero'.
//The 'name' key should not appear in the new array.
//The new array should have a new key added called (id).
//The key 'id' should be based on the index.
//Example 1:
//Input:
//const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];

//Output:
//[ { id: 0, hero: 'Spider-Man' }, { id: 1, hero: 'Thor' }, { id: 2, hero: 'Black Panther' }, { id: 3, hero: 'Captain Marvel' }, { id: 4, hero: 'Silver Surfer' } ]

//Explanation:
//The output shows that while mapping each object of the given object array using map() method an d returning a new object to the array with id specified to the index and name key replaced with hero and assigned the value of the hero

//Constraints:
//Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

//ans--

const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
const arr = heros.map((hero, index) => {
    return { id: index, hero: hero.name }
});
console.log(arr);