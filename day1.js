// Digital Clock

setInterval(() => {
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    console.log(`Current Time: ${time}`);
  }, 1000);
  