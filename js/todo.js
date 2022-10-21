const toDoForm = document.getElementById("todo-form");

//const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    //JSON.stringify() => javascript object / array 등을 string으로 바꿔줌
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    //
}

function deleteToDo(event) {
    //삭제해야할 부분을 li로 지정하고 remone()로 삭제
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    //li 안에 span이 들어있는 형태를 만들어줌
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    //event.preventDefault 로 (submit의)기본 동작을 막기
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    
    //toDos 배열에 newTodo를 추가
    toDos.push(newTodoObj);

    //화면에 newTodo를 보여줌
    paintToDo(newTodoObj);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    console.log(savedToDos)

    //forEach => array의 각 item에 대해 function을 실행시켜 줌
    // parseToDos.forEach(sayHello);

    //화면에 리스트를 그려 줌
    parseToDos.forEach(paintToDo);
}

//위와 동일한 방법
//function sayHello(item) {console.log("this is the turn of", item);} 안쓰고
//parseToDos.forEach((item) => console.log("this is the turn of", item)); 가능

