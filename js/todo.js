const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify는 object나 array 또는 어떤 코드건 string으로 만듦
  //localstorage에서는 배열은 저장되지 않고 문자열만 저장할 수 있음
  //JSON.parse(localStorage.getItem("todos")) string을 JSON.parse에 넣으면 배열을 얻음
}

function deleteToDo(event) {
  //target은 클릭된 html element
  //parentElement는 클릭된 element의 부모
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //toDo.id는 숫자이지만 li.id는 문자
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; //object에는 text,id가 있음
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //js가 방금 발생한 event를 함수 첫번째 인자로 줌
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    //text가 아닌 object로 저장
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); //데이터 저장
  paintToDo(newToDoObj); //input에서 value를 받아서 paintTodo로 그 값을 보냄
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
