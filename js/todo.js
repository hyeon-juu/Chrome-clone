const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //js가 방금 발생한 event를 함수 첫번째 인자로 줌
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //input에서 value를 받아서 paintTodo로 그 값을 보냄
  paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
