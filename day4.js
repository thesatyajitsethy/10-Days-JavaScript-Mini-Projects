// To-Do List

const tasks = [];

function addTask(task) {
  tasks.push(task);
  console.log(`Task added: ${task}`);
}

function removeTask(task) {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Task removed: ${task}`);
  } else {
    console.log(`Task not found: ${task}`);
  }
}

function listTasks() {
  console.log("Tasks:", tasks);
}

addTask("Learn JavaScript");
addTask("Practice coding");
removeTask("Learn JavaScript");
listTasks();
