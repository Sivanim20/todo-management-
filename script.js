// Task data
let tasks = [];

// Form submission event listener
document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const deadline = document.getElementById('deadline').value;

  // Create task object
  const task = {
    title,
    description,
    deadline,
    completed: false
  };

  // Add task to the list
  tasks.push(task);

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('deadline').value = '';

  // Render task list
  renderTaskList();
});

// Render task list
function renderTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach(function(task, index) {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.deadline}</p>
      <p>${task.description}</p>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
      <button onclick="toggleTaskStatus(${index})">Mark as ${task.completed ? 'Incomplete' : 'Completed'}</button>
    `;

    if (task.completed) {
      li.classList.add('completed');
    }

    taskList.appendChild(li);
  });
}

// Edit task
function editTask(index) {
  const task = tasks[index];

  // Prompt user for new values
  const newTitle = prompt('Enter new title:', task.title);
  const newDescription = prompt('Enter new description:', task.description);
  const newDeadline = prompt('Enter new deadline:', task.deadline);

  // Update task values
  task.title = newTitle;
  task.description = newDescription;
  task.deadline = newDeadline;

  // Render task list
  renderTaskList();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);

  // Render task list
  renderTaskList();
}

// Toggle task status
function toggleTaskStatus(index) {
  const task = tasks[index];
  task.completed = !task.completed;

  // Render task list
  renderTaskList();
}

// Initial render
renderTaskList();
