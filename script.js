let input = document.querySelector('[data-input]');
let addinput = document.querySelector('[data-add]');
let showtodo = document.querySelector('[data-show]');
let todoname = document.querySelector('[data-todoname]');
let complete = document.querySelector('[data-complete]');
let list = document.querySelector('[data-list]');

function add() {
    if (input.value === "") {
        alert("Please Enter Task");
    }
    else {

        let li = document.createElement("li");
        li.setAttribute("class", "relative pl-2 bg-red-400 rounded-md");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("class", "absolute cursor-pointer right-0 text-center pr-3");
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

list.addEventListener("click",function(e){
    let done = false;
    if(e.target.tagName === "LI"){
        e.target.setAttribute("class", "bg-sky-400 rounded-md font-bold italic pl-2");
        done = true;
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        confirm("Are you sure want to remove?");
        if(confirm){
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();