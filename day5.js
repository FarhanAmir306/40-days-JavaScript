// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
for (let i = 0; i < 5; i++){
    let row ='*'
    for (let j =1; j <=i; j++){
      row += '*'
    }
    console.log(row)
    
}


// 2. Craete Multiplication Table (Using for loop)

let n= 3;
for(let i = 1; i <=10; i++){
  const result = n*i;
  console.log(`${n}x${i} = ${result}`);

}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sum = 0;
for(let i=1;i<=500;i++){
  if(i % 2===0){
    sum += i;
  }
}

console.log('all odd numbers sum: '+sum);

// 4. Skipping Multiples of 3

for(let i=1;i<=20;i++){

  if(i === 3){
    continue;
  }
  console.log(i);

}

// Reverse Digits of a Number (Using while loop)

let input = 6789;
let reversed =0;

while(input > 0){
  let lastDigit = input % 10;
  console.log('last digit',lastDigit);  // For debugging purposes only. Remove this line for production.
  reversed = reversed * 10 + lastDigit;
  input = Math.floor(input / 10);
  console.log('input', input); // For debugging purposes only. Remove this line for production.
}

console.log('Reversed Number: '+reversed);