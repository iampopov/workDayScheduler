var nineAMbtnEL = document.getElementById("9amBtn");
var tenAMbtnEL = document.getElementById("10amBtn");
var toDo9am = document.getElementById("nineA")
var toDo10am = document.getElementById("tenA");
var currentTime = moment().startOf('day').fromNow();
var cTArr = ["10", "hours", "ago"]//currentTime.split(" ");

console.log(cTArr[0]);
console.log(toDo9am.value);
console.log(toDo10am.value);
console.log (parseInt(cTArr[0]) > parseInt(toDo9am.value));

if (parseInt(cTArr[0]) === parseInt(toDo9am.value)) {
    toDo9am.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo9am.value)) {
    toDo9am.classList.add("past")
} else {
    toDo9am.classList.add("future")
};
if (parseInt(cTArr[0]) === parseInt(toDo10am.value)) {
    toDo10am.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo10am.value)) {
    toDo10am.classList.add("past")
} else {
    toDo10am.classList.add("future")
};




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

nineAMbtnEL.addEventListener("click", evt);
tenAMbtnEL.addEventListener("click", evt);

renderToDo();
document.getElementById("currentDay").innerText = moment().format('LL');