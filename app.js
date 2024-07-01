//refactor this code from ES5 to ES2015. Use the rest operator and arrow functions.
function filterOutOdds() {
	//turns arguments into an array and stores in nums
	var nums = Array.prototype.slice.call(arguments);
	//returns a new array of only even numbers.
	return nums.filter(function(num) {
		return num % 2 === 0;
	});
}

function filterOutOdds(...nums) {
	return nums.filter((num) => num % 2 === 0);
}

//How do I write a function called findMin that accepts a variable amount of arguments and returns the smallest argument?

//use the rest operator. return Math.min. Use .reduce

function findMin(...args) {
	console.log(args);
	return args.reduce(function(arg, curr) {
		if (arg < curr) {
			return arg;
		}
		return curr;
	});
}

//use spread
function mergeObjects(obj1, obj2) {
	return { ...obj1, ...obj2 };
}

//test
// mergeCopies({ type: `Nissa`, color: `Blue` }, { year: 2015, model: `altima` });

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// // doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//Use rest to collect the variable amount of parameters. Use map to double each array value and return a new array of doubled values.

function doubleAndReturnArgs(arr, ...args) {
	let doubledArr = arr.map((val) => val * 2);
	let doubledArgs = args.map((val) => val * 2);
	return [ ...doubledArr, ...doubledArgs ];
}

//What is this function doing?
//This function takes an array, doubles each array value using map, and map returns a new array with the doubled values, which are then stores in a variable. The rest operator turns the passed in arguments into an array. This array is iterated using map and returns doubled values. Both of these array are then copied and spread into a new array together, which is returned.

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

//Hypothesis 1: const random = Math.floor(Math.random() * array.length);

function removeRandom(items) {
	const random = Math.floor(Math.random() * items.length);
	items.splice(random, 1);
	return [ ...items ];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
	return [ ...array1, ...array2 ];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
	let copy = { ...obj };
	delete copy[key];
	return copy;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
	let newObject = { ...obj1, ...obj2 };
	return newObject;
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
	let newObject = { ...obj };
	newObject[key] = val;
	return newObject;
}
