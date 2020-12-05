var timeBlocksEl = $("#timeblocks");
var tasks = [];
var currentDay = $("#currentDay")

var eventHandler = function(event) {
    let id = event.target.getAttribute('id');
    console.log(id);
    if (id === "task") {
        let block = event.target;
        var input = document.createElement("textarea");
        //input.className = "";
        block.appendChild(input);
        $(input).focus();
        var taskData = input.value
        console.log(taskData);
        tasks.push(taskData);
        saveTask();
        console.log(tasks);

    }
    else if (id === "saveBtn") {
        this.blur();
        block.innerHTML = input.value;
        saveTask();
    }
};
//save tasks to local storage
var saveTask = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
//function to load saved tasks and display current day
var loadPage = function() {
    //load tasks
    let savedTasks = localStorage.getItem("tasks");
    console.log(savedTasks);
    // if (!savedTasks) {
    //     return false;
    // }

    // savedTasks = JSON.parse(savedTasks);
    // for (var i =  0; i < savedTasks.length; i++) {
    //     console.log(savedTasks);
    // }
    //get date from moment
    var date = moment().format("MM/DD/YY");
    //display date in existing <p> element
    $("#currentDay").html(date);

    console.log(date);

}
window.onload = loadPage();
document.getElementById("timeblocks").addEventListener("click", eventHandler);