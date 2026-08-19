
const redBtn = document.getElementById("red-btn");
const blueBtn = document.getElementById("blue-btn");
const greenBtn = document.getElementById("green-btn");
const yellowBtn = document.getElementById("yellow-btn");
const blueBtn2 = document.getElementById("#108aec");

function changeColor(color) {
    const parts = document.querySelectorAll(".change");

    parts.forEach(function(part) {
        part.style.backgroundColor = color;
    });
}

redBtn.addEventListener("click", function() {
    changeColor("red");
});

blueBtn.addEventListener("click", function() {
    changeColor("blue");
});

greenBtn.addEventListener("click", function() {
    changeColor("green");
});
yellowBtn.addEventListener("click", function() {
    changeColor("yellow");
});
blueBtn2.addEventListener("click", function() {
    changeColor("#108aec");
});