
// 1. Write a Function to Convert Celsius to Fahrenheit

function celsiusToFahrenhit (celsius){
    const fahrenhit = (celsius * 9/5) + 32;
    return fahrenhit
}
console.log(celsiusToFahrenhit(38));



// 2. Create a Function to Find the Maximum of Two Numbers
function findMax(num1,num2){
    // let max = 0
    // if(num1 > num2){
    //     max = num1;
    // }
    // else {
    //     max=num2;
    // }
    // return max


    // 🎉 Best Practices 🎉
    return num1 > num2 ? num1 : num2 ;
    
}
console.log(findMax(5,-4));

// 3. Function to Check if a String is a Palindrome


function isPalindrome (str) {
   
    let reversed =""
    for(let i = str.length -1; i>=0 ; i--){
        reversed += str[i];
    }
    return str === reversed ? true : false;
}

console.log(isPalindrome('madam'));


// 4. Write a Function to Find Factorial of a Number
    function factorial(n){
        // 🎉Best Practices🎉
        if (n < 0) {
            return "Factorial is not defined for negative numbers";
        }
        //
        let result = 1;
        for(let i=n; i>0; i--){
            result *= i;
        }
        return result

    }
    console.log(factorial(5));

    // Intermediate-Level Best Practices🎉
    function recursionFactorial(n){
        if(n<0) return 'Invalid Input';
        if(n === 0 || n === 1) return 1;
        return n * recursionFactorial(n-1)
    }
    
    console.log(recursionFactorial(5));
    


// 5. Write a function to Count Vowels in a String

  function countVowels(str){

    // 🎉Best Practices🎉
    if(typeof str !== 'string'){
        console.log('input must be a string');
        return ;
    }
    //

     let  vowelFound="";
     for(let i = 0; i<str.length; i++){
        switch(str[i].toLowerCase()){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelFound += str[i]
                break
       }
    }
    console.log(`the number of vowels "${str}" is "${vowelFound.length}"  and they are "${vowelFound}"`)
  }

countVowels(12)


// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function capitalizeWord(str){
    let transformWord ="";
    let flag = true; // flag to know when to capitalize


    for(let i =0;i<str.length;i++){

        if(flag){
            transformWord +=str[i].toUpperCase()
            flag =false; // reset flag
        }
        else{
            transformWord += str[i]
        }

        if(str[i] === " ") flag =true;

    }
    return transformWord
}
console.log(capitalizeWord('hello'));

// 7. Use an IIFE to Print “Hello, JavaScript!”

(function(a){
    console.log('hello'+ a);
})('Javascript')

// 8. Create a Simple Callback Function

function greet (name,callback){
    console.log(name);
    callback()
}
 greet('farhan',function(){
    console.log('i am callbackFunction');
})

// 9. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {
//     f1();
// }
// f2();


// 10. Create Call Stack Execution Diagram for this flow
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();