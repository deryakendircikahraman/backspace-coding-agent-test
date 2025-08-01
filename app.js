let todos = [];

function addTodo() {
  let todoText = document.getElementById('todoInput').value;
  todos.push(todoText);
  document.getElementById('todoInput').value = '';
  renderTodos();
}

function renderTodos() {
  let html = '';
  todos.forEach((todo, index) => {
    html += `<li>${todo} <button onclick='removeTodo(${index})'>Remove</button></li>`;
  });
  document.getElementById('app').innerHTML = html;
}

function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
