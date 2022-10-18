const toDoForm = document.getElementById("todo-form");

//const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    //삭제해야할 부분을 li로 지정하고 remone()로 삭제
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    //li 안에 span이 들어있는 형태를 만들어줌
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    //toDos 배열에 newTodo를 추가
    toDos.push(newTodo);
    //화면에 newTodo를 보여줌
    paintToDo(newTodo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);