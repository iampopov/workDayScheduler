var nineAMbtnEL = document.getElementById("9amBtn");
var tenAMbtnEL = document.getElementById("10amBtn");
var toDo = document.querySelector(".description");

function renderToDo () {
    var text = localStorage.getItem("ToDo");
    if (text === null) {
        return;
    }
    toDo.setAttribute("value", text);
}

function evt (e) {
    e.preventDefault();
    var textBlock = document.querySelector(".description").value;
    if (textBlock === "") {
        alert("Can't save empty to do");
    } else {
        localStorage.setItem("ToDo", textBlock)    
        renderToDo(textBlock);
    }
};

nineAMbtnEL.addEventListener("click", evt);
tenAMbtnEL.addEventListener("click", evt);

renderToDo();