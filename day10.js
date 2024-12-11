// Word Frequency Counter

function wordFrequency(text) {
    const words = text.toLowerCase().split(/\W+/);
    const frequency = {};
    words.forEach(word => {
      if (word) frequency[word] = (frequency[word] || 0) + 1;
    });
    console.log(frequency);
  }
  
  wordFrequency("Hello world! Hello again.");
  