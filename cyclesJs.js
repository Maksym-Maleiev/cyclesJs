// while-cycle
var sheepCounted /* овець порахував */ = 0; 
while (sheepCounted < 10) {
  console.log("I have conted " + sheepCounted + " sheep!");
  sheepCounted++;
}
console.log("Zzzzzzzzzzz");

// for-cycle
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

// Hello!
var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
  console.log("Hello!");
}

// for-cycle amd array
// Animals
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}

// Name
var name = "Nick";

for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

// other ways to use cycles
for (var x = 2; x < 10000; x = x * 2){
  console.log(x);
}