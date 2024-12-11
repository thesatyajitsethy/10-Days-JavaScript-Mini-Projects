// Random Quote Generator

const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts."
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
  }
  
  getRandomQuote();
  