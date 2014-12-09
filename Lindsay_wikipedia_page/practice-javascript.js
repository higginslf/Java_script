//1. Variables
var x=3;
var y=4;

//2. Debugging (alerts, comments, the console)
alert("Lindsay's Alert!");
console.log ("Java Script is tricky");
console.log (x+y);

//3. Different data types
console.log (x+y>4);

var intro = "Hello, my name is ";
var name = "Lindsay";
var lastName="Higgins"
var introduction = intro + name;
console.log(introduction);

//4. Arrays

var snacks= [["Coke", "Sprite"],["Snickers", "m&m"]];

console.log(snacks[1][0]);
console.log(snacks[1][1]);

//5. Testing
console.log("x" === "y");
console.log(2 !== 4);

console.log(name.length>=6);

//6. Logic
var name1="Kyle"

if (name.length<name1.length) {
	console.log("'Kyle' has more letters than 'Lindsay'");
} else{
	console.log ("'Lindsay' has more letters than 'Kyle'");
}

if (4*5>5*4) {
	console.log("Coding is easy");
} else if(4*5<5*4){
	console.log("Coding is hard");
} else {
	console.log("Coding takes practice")
}

//7. Functions

function addTwo (some_number){
	return some_number +2;
}

console.log(addTwo (3));

function fullName (firstAndLastName){
	return firstAndLastName;
}

console.log(fullName ("Lindsay Higgins"));

function birthday (age){
	return age +1;
}

alert(birthday (25))

// Can you add additional text to an alert function. 
//For example suppose I wanted to say "Happy Birthday! You are 26"
//I tried to do: alert("Happy Birthday! You are" birthday (25));
//that did not work



