var timeBlocksEl = document.querySelector("#timeblocks");

var createTextBox = function(event) {
    console.log(event.target);
    //var input = document.createElement("textarea");
    //event.target.appendChild(input);
    //$(input).focus();
}

timeBlocksEl.addEventListener("click", createTextBox);