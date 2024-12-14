// we need a list of all the numbers with their colors
const numbers = [
    { number: 0, color: 'green' },
    { number: 1, color: 'red' },
    { number: 2, color: 'black' },
    { number: 3, color: 'red' },
    { number: 4, color: 'black' },
    { number: 5, color: 'red' },
    { number: 6, color: 'black' },
    { number: 7, color: 'red' },
    { number: 8, color: 'black' },
    { number: 9, color: 'red' },
    { number: 10, color: 'black' },
    { number: 11, color: 'black' },
    { number: 12, color: 'red' },
    { number: 13, color: 'black' },
    { number: 14, color: 'red' },
    { number: 15, color: 'black' },
    { number: 16, color: 'red' },
    { number: 17, color: 'black' },
    { number: 18, color: 'red' },
    { number: 19, color: 'red' },
    { number: 20, color: 'black' },
    { number: 21, color: 'red' },
    { number: 22, color: 'black' },
    { number: 23, color: 'red' },
    { number: 24, color: 'black' },
    { number: 25, color: 'red' },
    { number: 26, color: 'black' },
    { number: 27, color: 'red' },
    { number: 28, color: 'black' },
    { number: 29, color: 'black' },
    { number: 30, color: 'red' },
    { number: 31, color: 'black' },
    { number: 32, color: 'red' },
    { number: 33, color: 'black' },
    { number: 34, color: 'red' },
    { number: 35, color: 'black' },
    { number: 36, color: 'red' },
];

const numbersLength = Object.keys(numbers).length;

function generateRandomNumber(){
    return Math.floor(Math.random() * numbersLength);
}

function getNumberColor(number){
    return numbers[number].color;
}

const categories = {
    oneInTwo: {
        name: '1 in 2',
        description: 'Bet on the color of the number or even/odd',
        multiplier: 2, // 1:1 payout
        options: [
            {
                name: 'red',
                method: function (number) {
                    return getNumberColor(number) === 'red';
                }
            },
            {
                name: 'black',
                method: function (number) {
                    return getNumberColor(number) === 'black';
                }
            },
            {
                name: 'even',
                method: function (number) {
                    return number % 2 === 0;
                }
            },
            {
                name: 'odd',
                method: function (number) {
                    return number % 2 !== 0;
                }
            },
            {
                name: '1-18',
                method: function (number) {
                    return number >= 1 && number <= 18;
                }
            },
            {
                name: '19-36',
                method: function (number) {
                    return number >= 19 && number <= 36;
                }
            }
        ]
    },
    oneInThree: {
        name: '1 in 3',
        description: 'Bet on the number range or row',
        multiplier: 3, // 2:1 payout
        options: [
            {
                name: '1st 12',
                method: function (number) {
                    return number >= 1 && number <= 12;
                }
            },
            {
                name: '2nd 12',
                method: function (number) {
                    return number >= 13 && number <= 24;
                }
            },
            {
                name: '3rd 12',
                method: function (number) {
                    return number >= 25 && number <= 36;
                }
            },
            {
                name: 'top row',
                method: function (number) {
                    return number % 3 === 0;
                }
            },
            {
                name: 'middle row',
                method: function (number) {
                    return number % 3 === 1;
                }
            },
            {
                name: 'bottom row',
                method: function (number) {
                    return number % 3 === 2;
                }
            }
        ]
    },
    singles: {
        name: 'singles',
        description: 'Bet on a single number',
        multiplier: 36, // 35:1 payout
        // Factory function to create a bet for a specific number
        createOption: function (chosenNumber) {
            return {
                name: `Single ${chosenNumber}`,
                chosenNumber: chosenNumber,
                method: function (number) {
                    return number === chosenNumber;
                }
            };
        }
    }
};

function getOptionByName(category, name){
    return category.options.find(option => option.name === name);
}

const bets = [];

const singleButtons = document.querySelectorAll('.single-button');

const chipOptions = [
    {value: 1, color: 'red'},
    {value: 5, color: 'blue'},
    {value: 10, color: 'green'},
    {value: 25, color: 'black'},
    {value: 100, color: 'purple'},
    {value: 500, color: 'yellow'}
]

singleButtons.forEach(button => {
    button.addEventListener('click', function(){
        // get the value as well
        const chosenNumber = 5;
        bets.push( {category: categories.singles, option : categories.singles.createOption(chosenNumber), amount : 500});
    });
});


bets.push( {category: categories.oneInTwo, option : categories.oneInTwo.options[0], amount : 50});
bets.push( {category: categories.oneInTwo, option : categories.oneInTwo.options[1], amount : 50});
bets.push( {category: categories.singles, option : categories.singles.createOption(0), amount : 500});

const winningNumber = generateRandomNumber();
var winnings = 0;

bets.forEach(bet => {
    console.log(`You bet on: ${bet.option.name} with an amount of: ${bet.amount}`);
    const categoryMultiplier = bet.category.multiplier;
    const isWinningBet = bet.option.method(winningNumber);
    const amount = isWinningBet ? bet.amount * categoryMultiplier : 0;
    if (isWinningBet){
        winnings += amount;
        console.log(`You won on  ${bet.option.name} with an amount of: ${amount}`);
    }
    // console.log(`Winning number: ${winningNumber}, Winning bet: ${isWinningBet}, Amount: ${amount}`);
});

console.log("The winning number is: " + winningNumber);
console.log(`Total winnings: ${winnings}`);
