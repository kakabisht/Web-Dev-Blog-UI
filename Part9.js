var fn = prompt("What is your First Name? ");
var ln = prompt("What is your Last Name? ");
var age=prompt("What is your Age? ");
var cm = prompt("What is your Height in cm's? ");
var pn = prompt("What is your Pet's Name? ");
alert("Thank you so much for the information.");


if( (fn[0] == ln[0]) && (age>=20 && age <=30) && (cn>=170) && (pn[pn.length -1] =='y' ) ) {
    console.log("Welcome Comrade! You've passed the Spy Test");
}
else {
    console.log("Nothing here");
}
