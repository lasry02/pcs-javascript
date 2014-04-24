/*console.log("File loaded");
alert("Hello from a separate javascript file");
console.log("Back from alert");

function foo(x) {
    alert("In foo with " + x);
    var z  = 10;
    w = 10;
}

foo(5);
foo("hello");*/

/*function bar() {
    if (true) {
        var x  = 5;
    }
    console.log(x);
}

bar();*/
/*function test() {
    console.log(x == undefined);
    var x = 5;
}

//function test() {
    // var x;
    // console.log(x == undefined);
    // x = 5;
//}

test();*/

/*function loop(numberOfTimes) {
    var i;
    for(i = 0; i < numberOfTimes; i++) {
        alert("hi!");
    }
}

//loop(2);
loop("hello");

function x() {
    var myObj = { x: 10, y: 20 };
    var sum = 0;
    var i;
    
    for (i in myObj) {
        console.log(i);
        sum += myObj[i];
    }
    console.log(sum);
}

x();
*/
/*
var person = { 
    name: "Bob",
    age: 27,
    print: function () {
        console.log("I am " + this.name + " and I am " + this.age + " years old");
    }
};

//person.print();

var bill = { amount: 350 };

function printObject(obj) {
    if (obj.print) {
        obj.print();
    } else {
        for (i in obj) {
            console.log(i + ": " + obj[i]);
        }
    }
}

printObject(person);
printObject(bill);
*/

var theButton = document.getElementById("theButton");
theButton.addEventListener("click", function () { alert("clicked"); });





