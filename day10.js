
let user = "Alice";

function outer() {
    function inner() {
        console.log(user); // Bob
    }
    let user = "Bob";
    inner();
}

outer(); 

// let total = 0; // Global, bad practice

// function add(num) {
//     total += num;
// }
// Best Practice
function add () {
    let total = 0; // Closure, good practice
    return function (num) {
        total += num;
        return total;
    };
}

let addToTotal = add(); // Closure, good practice
console.log(addToTotal(5)); // 5



// 3. Create a function with a nested function and log a variable from the parent function.

function funcLog (){
    let a = 10; // local variable
    function innerFunc (){
        console.log(a); // 10
    }
    innerFunc(); // 10
}
funcLog(); // 10



// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function loopFunc() {
    for (let i = 0; i < 5; i++) {
        let loopVar = "Loop Variable " + i;
        console.log(loopVar); // Loop Variable 0, Loop Variable 1, ...
    }
    console.log(loopVar); // ReferenceError: loopVar is not defined
}


// 5. Write a function that tries to access a variable declared inside another function.

