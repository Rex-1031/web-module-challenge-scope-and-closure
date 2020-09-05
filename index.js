// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}


// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *    counter1 has the variable count inside of the function counterMaker. In counter2 the variable is hoisted.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *      counter1 uses closure.  Function counter is nested within counterMaker and is has access to all of the content within that function. It     could also reach out and grab variables that are not within the function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *      Counter1 would be preferable when you are trying to protect the code.  Counter2 two would be good if you wanted to use multiple counts.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

  inning = () =>  Math.floor(Math.random()*3);



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numberOfInnings){
let home = 0;
let away = 0;
for(let i = 0; i <= numberOfInnings; i++){
  home = home + callback();
  away = away + callback();
}
  return {Home: home, Away:away}
}
console.log(finalScore(inning, 9));


/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */



function getInningScore (cb){
  let homeScore = cb();
  let awayScore = cb();
  let currentInning = {
    Home: homeScore,
    Away: awayScore
  }

  return currentInning;
}

console.log (getInningScore(inning));

function scoreboard(callBack1, callBack2, inningNumber) {

  let finalHome = 0;
  let finalAway = 0;


  for (let i = 1; i <= inningNumber; i++){

    let currentInning = callBack1(callBack2)
  if (i === 1){
    finalAway += currentInning.Away;
    finalHome += currentInning.Home;
    console.log(`1st inning: ${currentInning.Away} - ${currentInning.Home}`);
  }
  else if (i === 2){
    finalAway += currentInning.Away;
    finalHome += currentInning.Home;
    console.log(`2nd inning: ${currentInning.Away} - ${currentInning.Home}`);
  }
  else if (i === 3){
    finalAway += currentInning.Away;
    finalHome += currentInning.Home;
    console.log(`3rd inning: ${currentInning.Away} - ${currentInning.Home} `);
  }else{
    finalAway += currentInning.Away;
    finalHome += currentInning.Home;
    console.log(`${i}th inning: ${currentInning.Away} - ${currentInning.Home}`);
  }
}
   return `Final Score: ${finalAway} - ${finalHome} `
}

console.log(scoreboard(getInningScore, inning, 9));

