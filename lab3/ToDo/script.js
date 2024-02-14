var inputBox = document.getElementById("input-task");
var list = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("Task cannot be null");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}


list.addEventListener("click", function(element){
    if(element.target.tagName === "LI"){
        element.target.classList.toggle("checked");
    }
    else if (element.target.tagName=== "SPAN"){
        element.target.parentElement.remove();
    }
}, false);