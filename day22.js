// 1. Pass a function to greet a user and then thank them
function greet(callback) {
  console.log("Hello");
  callback();
}

function callback() {
  console.log("i am a callback function");
}

greet(callback);

// 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
function calculator(a, b, operationCallback) {
  return operationCallback(a, b);
}

function add(x, y) {
  return x + y;
}

let result = calculator(5, 3, add);
console.log(result); // 8

// 3. Create a delayedMessage function that prints a message after a delay using setTimeout
function delayMassage(message, dalay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, dalay);
}

delayMassage("hello", 2000, () => console.log("callback Fired"));

function filterNumbers(arr, Callback) {
  // Use loop and callback to return filtered array
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Callback(arr[i])) {
      filteredArray.push(arr[i]);
    } else {
      console.log("not a number");
    }
  }
  return filteredArray;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let conditionCallback = (n) => n > 5; // Example condition: filter numbers greater than 5
let ans = filterNumbers(arr, conditionCallback); // should return [3, 4]
console.log(ans); // [3, 4]

function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

task1(function () {
  task2(function () {
    task3();
  });
});
