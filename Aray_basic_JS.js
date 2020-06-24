
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(){

    var newName=prompt("What name would you like to add?");
    roster.push(newName);

}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

function remove(){

    var remName=prompt("what name would you like to remove? ");
    var index=roster.indexOf(remName);
    roster.splice(index,1);
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){

    console.log(roster);
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var start=prompt("Would you like to start the roster web app? y/n");
var request="empty";

if(start ==='y' ||start ==='Y' ){
    while (request !=="quit" ) {
        request=prompt("Please select an action: add, remove, disply or quit")
        if (request[0]==="a" || request[0]==="A") {
            addNew();
        }
        else if(request[0]==="r" || request[0]==="R") {
            remove();
        }
        else if(request[0]==="d" || request[0]==="D") {
            display();
        }
        else {
            alert("Not recognized");
            request="quit";
        }
    }
}
alert("Thanks for using this web app ");
