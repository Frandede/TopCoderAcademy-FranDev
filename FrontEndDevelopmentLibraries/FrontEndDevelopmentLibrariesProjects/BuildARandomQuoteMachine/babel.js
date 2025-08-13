const QUOTES = [
  { text: 'Eighty percent of success is showing up.', author: 'Woody Allen' },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
  { text: 'Whether you think you can or you think you can’t, you’re right.', author: 'Henry Ford' },
  { text: 'Your time is limited, so don’t waste it living someone else’s life.', author: 'Steve Jobs' },
  { text: 'If you’re going through hell, keep going.', author: 'Winston Churchill' },
  { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
  { text: 'It always seems impossible until it’s done.', author: 'Nelson Mandela' },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' }
];

function getRandomQuote() {
  const idx = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[idx];
}

function twitterUrl(text, author) {
  const tweet = `"${text}" — ${author}`;
  return `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(tweet)}`;
}

function QuoteMachine() {
  const [quote, setQuote] = React.useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote = getRandomQuote();
    if (newQuote.text === quote.text && QUOTES.length > 1) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <p id="author">— {quote.author}</p>
      <a
        id="tweet-quote"
        href={twitterUrl(quote.text, quote.author)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QuoteMachine />);
