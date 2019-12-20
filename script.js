var saveBtnEl = document.querySelector(".saveBtn");
var toDo = document.querySelector(".description");

function renderToDo () {
    var textBlock = document.querySelector(".description");

    if (textBlock.value === null) {
        return;
    }

    toDo.textContent = textBlock;

}

saveBtnEl.addEventListener("click", function(e) {
    e.preventDefault();
    var textBlock = document.querySelector(".description").value;
    if (textBlock === "") {
        alert("Can't save empty to do");
    } else {
    
    localStorage.setItem("ToDo", textBlock)    
    toDo.textContent = textBlock;
    renderToDo();
    }

})