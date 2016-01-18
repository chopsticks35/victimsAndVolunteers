var inputNumber;
var name;
var phoneNumber;
var streetAddress;
var searchArray
var person

function searchNumber() {

    inputNumber = window.prompt("How many disaster victims would you like to search?");
    searchArray = new Array[inputNumber];
}

function personObject() {
    for (var i=1; i<=searchArray.length; i++) {
        person = window.display("Enter the name of person #" + i);
        
    }
    
}

searchNumber();
personObject();