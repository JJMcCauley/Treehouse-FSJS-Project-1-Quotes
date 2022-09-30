/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `The journey of a thousand miles begins with one step.`,
    source: `Lao Tzu`,
  },
  {
    quote: `What doesn't kill you makes you stronger.`,
    source: `Friedrich Nietzsche`,
    citation: `Twilight of the Idols`,
    year: 1888
  },
  {
    quote: `Life is what happens when you're busing making other plans.`,
    source: `Allen Saunders`,
    citation: `Readers Digest`,
    year: 1957
  },
  {
    quote: `Tis better to have loved and lost than to have never loved at all.`,
    source: `Alfred, Lord Tennyson`,
    citation: `In Memorariam A. H. H.`,
    year: 1850
  },
  {
    quote: `Get busy living or get busy dying.`,
    source: `Stephen King`,
    citation: `Rita Hayworth and Shawshank Redemption`,
    year: 1982
  },
  {
    quote: `A man is but what he knoweth.`,
    source: `Sir Francis Bacon`,
  },
  {
    quote: `You miss 100% of the shots you never take.`,
    source: `Wayne Gretzky`,
    year: 1991
  },
  {
    quote: `If you're going through hell, keep going.`,
    source: `Winston Churchill`,
  },
  {
    quote: `Life is like a box of chocolates. You never knokw what you're going to get.`,
    source: `Forrest Gump`,
    actor: `Tom Hanks`,
    citation: `Forrest Gump`,
    year: 1994
  },
  {
    quote: `Every man is guilty of all the good he did not do.`,
    source: `Voltaire`,
    year: 1752
  }
]
const recentlyUsedQuotes = [];

/***
 * Timer Functions based on code from https://www.geeksforgeeks.org/how-to-call-a-function-repeatedly-every-5-seconds-in-javascript/
 ***/ 

let timer;

/**
 * Starts a timer to generate a quote after specified time
 * @param {number} time Time in seconds the timer should wait before executing
 */

function startTimer( time ) {
    timer = setInterval(function() {
      printQuote();
    }, (time * 1000));
}

/**
 * Resets the timer to generate a random quote
 */
         
function stopTimer() {
  clearInterval(timer);
}

/**
 * Returns a random number in a range
 *
 * @param {number} min Represents beginning of range
 * @param {number} max Represents the end of a range
 * @return {number} a random number between min and max
 */

const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Finds an index of an array that has not been used recently and returns it
 * @param {number} max Represents the length of the array being checked
 * @return {number} index of an array that has not been used recently
 */
const checkIfUsed = ( max ) => {
  let index = randomNumberGenerator(0, max);
  while (recentlyUsedQuotes.includes(index)) {
    index = randomNumberGenerator(0, max);
  }
  recentlyUsedQuotes.push(index)
  if (recentlyUsedQuotes.length >= 6) {
    recentlyUsedQuotes.shift();
  }
  console.log(recentlyUsedQuotes)
  return index;
}

/***
 * `getRandomQuote` function
***/


/**
 * Returns a random quote from an array
 *
 * @param {array} arr The array a random quote will be pulled from
 * @return {object} returns an quote object after it has been checked for recent use
 */

const getRandomQuote = (arr) => {
  let max = arr.length - 1;
  return arr[checkIfUsed(max)];
}


/***
 * `printQuote` function
***/

const quoteContainer = document.querySelector('.container');

/**
 * Changes background color of body element to a randomly generated color
 */

const changeBGColor = () => {
  let randomColor = `rgb(${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)})`
  document.querySelector('body').style.backgroundColor = randomColor;
}

/**
 * Prints quote to the page, changes background color, resets timer
 */
const printQuote = () => {
  stopTimer()
  changeBGColor();
  let quote = getRandomQuote(quotes);
  let html = `
    <div id="quote-box" class="quote-box">
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
    `
  if (quote.actor !== undefined) {
    html += `
      <span class="citation">${quote.actor}</span>
    `
}
  if (quote.citation !== undefined) {
    html += `
    <span class="citation">${quote.citation}</span>
    `   
  }
  if (quote.year !== undefined) {
    html += `
    <span class="year">${quote.year}</span>
    `
  }
  html += `
  </p>
  </div>
  `
  quoteContainer.innerHTML = html;
  startTimer(8);
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

