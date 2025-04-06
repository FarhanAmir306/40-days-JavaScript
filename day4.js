// 1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
       // Output: It's a normal day.
}


// 2. Build an ATM Cash Withdrawal System 

let amount = 500;

if (amount % 100 === 0 && amount <=1000) {
    console.log("Withdrawal successful.");
}
else {
    console.log("Insufficient funds.");
}

// 3. Build a Calculator with switch-case

let sum = '+';

switch (sum) {
    case '+':
        console.log(5 + 3);
        break;
    case '-':
        console.log(5 - 3);
        break;
    case '*':
        console.log(5 * 3);
        break;
    case '/':
        console.log(5 / 3);
        break;
    default:
        console.log("Invalid operator.");
        // Output: Invalid operator.
}

// 4. Pay for your movie ticket

let age = 60 ;

if (age >= 18 && age <= 60) {
    console.log("INOX charges ticket prices $10");
}
else if(age >= 60){
    console.log("INOX charges ticket prices $8");
}
else {
    console.log("INOX charges ticket prices $3");  
}

// 5. Horoscope Sign Checker

const zodiacSigns = {
    January: "Capricorn",
    February: "Aquarius",
    March: "Aries",
    April: "Taurus",
    May: "Gemini",
    June: "Cancer",
    July: "Leo",
    August: "Virgo",
    September: "Libra",
    October: "Scorpio",
    November: "Sagittarius",
    December: "Capricorn"
  };

let birthMonth = "January";
let zodic = zodiacSigns[birthMonth];

if(zodic){
    console.log(`Your zodiac sign is ${zodic}`);
}
else{
    console.log("Invalid birth month");
}

// 6. Which Triangle?

let side1 =5;
let side2 =5;
let side3 =5;

if(side1 === side2 && side2 === side3){
    console.log("Equilateral Triangle");
}
else if(side1 === side2 ||  side2 === side3 || side3 === side1){
    console.log("Isosceles Triangle");
}
else{
    console.log("Scalene Triangle");
}
