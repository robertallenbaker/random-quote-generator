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
let quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    year: '1995'
  },
  {
    quote: 'Time is precious, waste it wisely.',
    source: 'K Bromberg',
    citation: 'Slow Burn - A Driven Novel'
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde'
  },
  {
    quote: 'A room without books is like a body without a soul.',
    source: 'Marcus Tullius Cicero'
  },
  {
    quote: 'You only live once, but if you do it right, once is enough',
    source: 'Mae West'
  }
];


/***
 * `getRandomQuote` function
***/
let getRandomQuote = () => {
  let rollQuote = Math.floor(Math.random() * (quotes.length));
  return rollQuote;
}

/***
 * `printQuote` function
***/
let printQuote = () => {
  let randomQuote = getRandomQuote();
  let quoteString = 
    `
      <p class="quote">${quotes[randomQuote].quote}</p>
      <p class="source">${quotes[randomQuote].source}
    `;
  if(quotes.citation != '') {
    quoteString += 
      `
        <span class="citation">${quotes[randomQuote].citation}</span>
      `
  }
  if(quotes.citation != '') {
    quoteString +=
      `
        <span class="year">${quotes[randomQuote].year}</span>
      `
  }
  quotesString += '</p>';
  document.getElementById('quote-box').innerHTML = quoteString; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);