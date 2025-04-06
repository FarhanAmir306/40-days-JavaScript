// 1. Odd or Even?
let num =  4
if(num % 2 === 0){
    console.log('The number is even')
}
else{
    console.log('The number is odd')
}

// 2. Do you have a Driving License?

let age = 21
if(age>=18){
    console.log('You have a driving license')
}
else{
    console.log('You do not have a driving license')
}

// 3. Calculate CTC with a Bonus

let monthlySalary = 12300
let annualSalary = monthlySalary * 12

let bonus = annualSalary * 0.20;

let totalCTC = annualSalary + bonus
console.log("Annual Salary:", annualSalary);
console.log("Bonus (20%):", bonus);
console.log("Total CTC:", totalCTC);

// 4. Write a program for the Traffic Light Simulation.

let currentColor = 'Red'

switch(currentColor){
    case 'Red':
        console.log('Stop')
        break;
    case 'Green':
        console.log('Go')
        break;
    default:
        console.log('Invalid color')
}

// 5. Create an Electricity Bill Calculator

let consume = 10;
let pricePerUnit =150
let perMonthConsume = consume * 30 
let totalMonthCost = perMonthConsume * pricePerUnit
let perYearCost = totalMonthCost * 12
let discount = perYearCost * 0.20
let afterDiscount = perYearCost - discount

console.log(afterDiscount);


// 6. Leap Year Checker

let year = 2025
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    ?`${year} is leap year`
    : `${year} is not leap year`

console.log(isLeapYear);

// 7. Max of Three Numbers
let p = 5
let q = 7
let r = 9
let max

if(p >= q && p <= r)
     max = p
else if(q >= p && q >= r)
    max = q
else
    max = r

console.log(max);

// 8. Biwise Doubling

let count = 5;
let doubled = count << 1;
console.log("Original:", count);
console.log("Doubled using bitwise:", doubled);