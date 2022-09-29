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
    quote: `The journey of a thousand miles begins with one step`,
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

/***
 * Timer Functions
 ***/ 

let timer;

/**
 * Starts a timer to generate a quote after fifteen seconds
 */

function startTimer() {
    timer = setInterval(function() {
      printQuote();
    }, 10000);
}

/**
 * Resets the timer to generate a random quote
 */
         
function stopTimer() {
  clearInterval(timer);
}


/***
 * `getRandomQuote` function
***/

/**
 * Returns a random number in a range
 *
 * @param {number} min Represents beginning of range
 * @param {number} max Represents the end of a range
 * @return {number} a random number between min and max
 */

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max-min+1)+min)
}

/**
 * Returns a random quote from an array
 *
 * @param {array} arr The array a random quote will be pulled from
 */
let getRandomQuote = (arr) => {
  let max = arr.length - 1;
  return arr[randomNumberGenerator(0, max)];
}


/***
 * `printQuote` function
***/

const quoteContainer = document.querySelector('.container');

/**
 * Prints quote to the page, changes background color, resets timer
 */
const printQuote = () => {
  stopTimer()
  let randomColor = `rgb(${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)})`
  document.querySelector('body').style.backgroundColor = randomColor;
  let quote = getRandomQuote(quotes);
  let html = `
    <div id="quote-box" class="quote-box">
    <p class="quote">${quote.quote}.</p>
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
  startTimer();
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

