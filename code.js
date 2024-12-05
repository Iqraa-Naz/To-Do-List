const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("todo-list");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter your task");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(inputBox.value));
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("remove-task");
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function (e) {
    
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        const listItem = e.target.parentElement;
        listItem.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});
