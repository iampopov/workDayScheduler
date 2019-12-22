var nineAMbtnEL = document.getElementById("9amBtn");
var tenAMbtnEL = document.getElementById("10amBtn");
var toDo9am = document.getElementById("nineA")
var toDo10am = document.getElementById("tenA");
// var renderToDoEl = "";

function renderToDo () {
    var nineAEl = localStorage.getItem("nineA");
    var tenAEl = localStorage.getItem("tenA");
    
    toDo9am.setAttribute("value", nineAEl);
    if (nineAEl === null) {
        toDo9am.setAttribute("value", " ");
        }
    toDo10am.setAttribute("value", tenAEl);
    if (tenAEl === null) {
        toDo10am.setAttribute("value", " ");
        }
}

function evt (e) {
    e.preventDefault();
    var textBlock = document.querySelector("#"+this.value).value;
    localStorage.setItem(this.value, textBlock)    
    renderToDo(textBlock);
};
console.log(localStorage);
nineAMbtnEL.addEventListener("click", evt);
tenAMbtnEL.addEventListener("click", evt);

renderToDo();