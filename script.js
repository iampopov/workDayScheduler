var nineAMbtnEL = document.getElementById("9amBtn");
var tenAMbtnEL = document.getElementById("10amBtn");
var elevenAMbtnEL = document.getElementById("11AMBtn");
var twelvePMbtnEL = document.getElementById("12PMBtn");
var onePMbtnEL = document.getElementById("1PMBtn");
var twoPMbtnEL = document.getElementById("2PMBtn");
var threePMbtnEL = document.getElementById("3PMBtn");
var fourPMbtnEL = document.getElementById("4PMBtn");
var fivePMbtnEL = document.getElementById("5PMBtn");
var toDo9am = document.getElementById("nineA")
var toDo10am = document.getElementById("tenA");
var toDo11am = document.getElementById("elevenA");
var toDo12pm = document.getElementById("twelveP");
var toDo1pm = document.getElementById("oneP");
var toDo2pm = document.getElementById("twoP");
var toDo3pm = document.getElementById("threeP");
var toDo4pm = document.getElementById("fourP");
var toDo5pm = document.getElementById("fiveP");
var currentTime = moment().startOf('day').fromNow();
var cTArr = currentTime.split(" ");


//9am style
if (parseInt(cTArr[0]) === parseInt(toDo9am.value)) {
    toDo9am.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo9am.value)) {
    toDo9am.classList.add("past")
} else {
    toDo9am.classList.add("future")
};
//10am style
if (parseInt(cTArr[0]) === parseInt(toDo10am.value)) {
    toDo10am.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo10am.value)) {
    toDo10am.classList.add("past")
} else {
    toDo10am.classList.add("future")
};
//11am style
if (parseInt(cTArr[0]) === parseInt(toDo11am.value)) {
    toDo11am.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo11am.value)) {
    toDo11am.classList.add("past")
} else {
    toDo11am.classList.add("future")
};
//12pm style
if (parseInt(cTArr[0]) === parseInt(toDo12pm.value)) {
    toDo12pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo12pm.value)) {
    toDo12pm.classList.add("past")
} else {
    toDo12pm.classList.add("future")
};
//1pm style
if (parseInt(cTArr[0]) === parseInt(toDo1pm.value)) {
    toDo1pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo1pm.value)) {
    toDo1pm.classList.add("past")
} else {
    toDo1pm.classList.add("future")
};
//2pm style
if (parseInt(cTArr[0]) === parseInt(toDo2pm.value)) {
    toDo2pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo2pm.value)) {
    toDo2pm.classList.add("past")
} else {
    toDo2pm.classList.add("future")
};
//3pm style
if (parseInt(cTArr[0]) === parseInt(toDo3pm.value)) {
    toDo3pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo3pm.value)) {
    toDo3pm.classList.add("past")
} else {
    toDo3pm.classList.add("future")
};
//4pm style
if (parseInt(cTArr[0]) === parseInt(toDo4pm.value)) {
    toDo4pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo4pm.value)) {
    toDo4pm.classList.add("past")
} else {
    toDo4pm.classList.add("future")
};
//5pm style
if (parseInt(cTArr[0]) === parseInt(toDo5pm.value)) {
    toDo5pm.classList.add("present")
} else if (parseInt(cTArr[0]) > parseInt(toDo5pm.value)) {
    toDo5pm.classList.add("past")
} else {
    toDo5pm.classList.add("future")
};
//end of style
function renderToDo () {
    var nineAEl = localStorage.getItem("nineA");
    var tenAEl = localStorage.getItem("tenA");
    var elevenAEl = localStorage.getItem("elevenA");
    var twelvePEl = localStorage.getItem("twelveP");
    var onePEl = localStorage.getItem("oneP");
    var twoPEl = localStorage.getItem("twoP");
    var threePEl = localStorage.getItem("threeP");
    var fourPEl = localStorage.getItem("fourP");
    var fivePEl = localStorage.getItem("fiveP");
    
    toDo9am.setAttribute("value", nineAEl);
    if (nineAEl === null) {
        toDo9am.setAttribute("value", " ");
    }

    toDo10am.setAttribute("value", tenAEl);
    if (tenAEl === null) {
        toDo10am.setAttribute("value", " ");
    }

    toDo11am.setAttribute("value", elevenAEl);
    if (elevenAEl === null) {
        toDo11am.setAttribute("value", " ");
    }

    toDo12pm.setAttribute("value", twelvePEl);
    if (twelvePEl === null) {
        toDo12pm.setAttribute("value", " ");
    }

    toDo1pm.setAttribute("value", onePEl);
    if (onePEl === null) {
        toDo1pm.setAttribute("value", " ");
    }

    toDo2pm.setAttribute("value", twoPEl);
    if (twoPEl === null) {
        toDo2pm.setAttribute("value", " ");
    }

    toDo3pm.setAttribute("value", threePEl);
    if (threePEl === null) {
        toDo3pm.setAttribute("value", " ");
    }

    toDo4pm.setAttribute("value", fourPEl);
    if (fourPEl === null) {
        toDo4pm.setAttribute("value", " ");
    }

    toDo5pm.setAttribute("value", fivePEl);
    if (fivePEl === null) {
        toDo5pm.setAttribute("value", " ");
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
elevenAMbtnEL.addEventListener("click", evt);
twelvePMbtnEL.addEventListener("click", evt);
onePMbtnEL.addEventListener("click", evt);
twoPMbtnEL.addEventListener("click", evt);
threePMbtnEL.addEventListener("click", evt);
fourPMbtnEL.addEventListener("click", evt);
fivePMbtnEL.addEventListener("click", evt);

renderToDo();
document.getElementById("currentDay").innerText = moment().format('LL');