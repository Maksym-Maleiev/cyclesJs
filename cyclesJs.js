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
/*
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}
*/

// Name
var name = "Nick";

for (var i = 0; i < name.length; i++) {
  console.log("My name contains the letter " + name[i] + ".");
}

// other ways to use cycles
for (var x = 2; x < 10000; x = x * 2) {
  console.log(x);
}

// lets try (use for-cycle)
for (var y = 3; y < 10000; y = y * 3) {
  console.log(y);
}
// (use while-cycle)
var y = 3;
while (y < 10000) {
  console.log(y);
  y = y * 3;
}

// #1: awesome animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

animals[0] = "Awesome " + animals[0];
animals[1] = "Awesome " + animals[1];
animals[2] = "Awesome " + animals[2];
animals[3] = "Awesome " + animals[3];

for (var i = 0; i < 1; i++) {
  console.log(animals);
}

// #2: random string generator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var stringLenght = 6;

while (randomString.length < stringLenght) {
randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);

// #3: H4CK3R SP34K
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
  if ("a" === 4) {
    console.log(output += 4);
  } else if ("e" === 3) {
    console.log(output += 3);
  } else if ("i" === 1) {
    console.log(output += 1);
  } else if ("o" === 0) {
    console.log(output += 0);
  } else {
    console.log(output += input[i]);
  }
};
console.log(output);