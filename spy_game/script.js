var firstName = prompt("First Name Please: ")
var lastName = prompt("Second Name Please: ")
var age = prompt("How Old Are You? ")
var height = prompt("What is ypur height? ")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information!")

//LOGIC


// Four Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


// Name Condition
if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
    nameCond = false;
}

//Age Condition
if (age > 20 && age < 30) {
    ageCond = true;
}else {
    ageCond = false;
}

//Height Condition
if (height >= 170) {
    heightCond = true;
}else {
    heightCond = false;
}

 // Pet Name
 if (petName[petName.length-1] === "y") {
    petCond = true;
 }else {
    petCond = false;
 }

 //Check All Conditions
 if(nameCond && ageCond && heightCond && petCond) {
    console.log("Shaabaash bete, pass ho gya");
 }else {
    console.log("Abe chal nikal na lwde!");
 }