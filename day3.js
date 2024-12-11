// Counter App

const counter = {
    count: 0,
    increment() {
      this.count++;
      console.log(this.count);
    },
    decrement() {
      this.count--;
      console.log(this.count);
    },
    reset() {
      this.count = 0;
      console.log(this.count);
    }
  };
  
  counter.increment();
  counter.decrement();
  counter.reset();
  