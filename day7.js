
// 1.user input
// 2.user input cheack
// 3.computer choise
// 4. random number
// 5.compare user and computer value
// 6. if user win announcment
// 7.again compare computer value and userValue;
// 8.if computer win announcment
// 9 if both tie announc this
// 10. ask can you play again ?


function rpsGame(){
    console.log('Well Come to rock,paper,scissors game' );
    //UserInput
    const userChoiceInput = prompt('Enter Your Choice')
    if(userChoiceInput === "") console.log('plz give the input');
    const userInput = userChoiceInput.toLowerCase()
    //Computer Choice between 1 to 3
    const randomNumber = Math.floor(Math.random() * 3 )+1;
    let computerChoice;

    switch(randomNumber){
        case 1:
            computerChoice='rock';
            break
        case 2:
            computerChoice='paper';
            break
        case 3:
            computerChoice='scissors'
            break

        
        
    }

    // compare for User

    if(
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ){
        console.log('Congragulations 🎉🎉 You Win ,,, Yah!!!');
    }

    //compare for both
    else if (userInput === computerChoice){
        console.log('Opps Both are Tie');
    }

    // compare for Computer
    else if(
        (userInput === 'scissors' && computerChoice === 'rock') ||
        (userInput === 'rock' && computerChoice === 'paper') ||
        (userInput === 'paper' && computerChoice === 'scissors')
    ){
        console.log('ohho Computer Win 🙄😶');
    }

    else{
        console.log('Give me correct value');
    }
    // play again 
    const playAgain = prompt('Do you Play again(yes/no)')
    const again = playAgain ? playAgain : 'no'
    again === 'yes'? rpsGame() : console.log(' 🥰 Thanks for playing! See you next time! 🥰');

}
// rpsGame()




// 1. user input
// 2. computer choice
// 3. random number
// 4. check user input
// 5. check computer choice
// 6. compare user and computer value
// 7.if userInput high from computer value print number is high
// 8.if userInput low from computer value print number is low
// 9. if both tie announc secret number is Found
// 10. find total terms for guess the number


function secretNumber(){

    const secretNumber = Math.floor(Math.random() * 10) + 1;
    let attemps = 0;
    let guess = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    while(guess !== secretNumber){
        const userPrompt = prompt('Enter Your Guess Number')
        if(userPrompt === "") console.log('plz give the input');
        guess = parseInt(userPrompt);

        if(isNaN(guess) || guess < 1 || guess > 10){
            console.log('Please enter a valid number between 1 and 10.');
            continue;
        }
        attemps++;

        if(guess<secretNumber){
            console.log('Too low ! try again.');
        }
        else if(guess > secretNumber){
            console.log('Too high ! try again.');

        }
        else{
            console.log(`Congratulations! You found the secret number ${secretNumber} in ${attemps} attempts!`);
            break;
        }
    }
    
    // play again
    const playAgain = prompt('Do you Play again(yes/no)')
    const again = playAgain ? playAgain : 'no'
    again === 'yes'? secretNumber() : console.log(' 🥰 Thanks for playing! See you next time! 🥰');
    


}

secretNumber()

