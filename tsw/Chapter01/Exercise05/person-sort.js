// Command Line commands
// tsc person-sort.ts
// node person-sort.js
// we use this variable to count calls
var count = 0;
// Gets the full name of a given person
function getFullName(person) {
    count += 1;
    return person.firstName + " " + person.lastName;
}
// array of persons that we need to sort
var programmers = [
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Barbara', lastName: 'Liskow' },
    { firstName: 'Lars', lastName: 'Bak' },
    { firstName: 'Guido', lastName: 'Van Rossum' },
    { firstName: 'Anders', lastName: 'Hejslberg' },
    { firstName: 'Edsger', lastName: 'Dijkstra' },
    { firstName: 'Brandon', lastName: 'Eich' },
    { firstName: 'Alpha', lastName: 'Alpha' },
    { firstName: 'Zeta', lastName: 'Zeta' },
];
var arranged = [
    { firstName: 'Alpha', lastName: 'Alpha' },
    { firstName: 'Anders', lastName: 'Hejslberg' },
    { firstName: 'Barbara', lastName: 'Liskow' },
    { firstName: 'Brandon', lastName: 'Eich' },
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Edsger', lastName: 'Dijkstra' },
    { firstName: 'Guido', lastName: 'Van Rossum' },
    { firstName: 'Lars', lastName: 'Bak' },
    { firstName: 'Zeta', lastName: 'Zeta' }
];
function trySort(first, second) {
    var firstFullName = getFullName(first);
    var secondFullName = getFullName(second);
    return firstFullName.localeCompare(secondFullName);
}
function trySort2(persons) {
    persons.sort();
    return persons;
}
// a naive and straightforward sorting function
function naiveSortPersons(persons) {
    return persons.slice().sort(function (first, second) {
        var firstFullName = getFullName(first);
        var secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    });
}
// Takes an array of persons, and return (a sorted) array of persons
// Uses a Schwartzian transform
function schwartzSortPersons(persons) {
    // Use the array's `map` function to transform each element into a tuple
    var tuples = persons.map(function (person) { return [person, getFullName(person)]; });
    // Sort the `tuples` array of tuples, using the standard `sort` method, on the second element of the tuple
    tuples.sort(function (first, second) { return first[1].localeCompare(second[1]); });
    // Transform the sorted array of tuples into the format we want - just an array of `person` objects
    // by taking the first element of each tuple, discarding the schwartz.
    var result = tuples.map(function (tuple) { return tuple[0]; });
    // Return the new array from the function
    return result;
}
// Call the naive `sortPersons` function on our defined array
count = 0;
var sortedNaive = naiveSortPersons(programmers);
// Output both the sorted array, and the count variable.
console.log(sortedNaive);
console.log("When called using the naive approach, the function was called " + count + " times");
// Call the Schwartzian `sortPersons` function on our defined array
count = 0;
var sortedSchwartz = schwartzSortPersons(programmers);
// Output both the sorted array, and the count variable.
console.log(sortedSchwartz);
console.log("When called using the Schwartzian transform approach, the function was called " + count + " times");
// trySort2
count = 0;
var trying = trySort2(programmers);
console.log(trying);
console.log("When called using the trySort2 approach, the getFullName function was called " + count + " times");
