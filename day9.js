// Expense Tracker

const transactions = [];

function addTransaction(description, amount) {
  transactions.push({ description, amount });
  console.log(`Transaction added: ${description} - $${amount}`);
}

function calculateBalance() {
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  console.log(`Current Balance: $${balance}`);
}

function listTransactions() {
  console.log("Transactions:", transactions);
}

addTransaction("Salary", 1000);
addTransaction("Groceries", -200);
calculateBalance();
listTransactions();
