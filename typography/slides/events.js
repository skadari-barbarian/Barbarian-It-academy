// 1. CLICK EVENT

const clickBtn = document.getElementById("clickBtn");
const clickResult = document.getElementById("clickResult");

clickBtn.addEventListener("click", function () {

    clickResult.textContent = "Button clicked!";

});


// 2. MOUSE EVENTS

const mouseBox = document.getElementById("mouseBox");
const mouseResult = document.getElementById("mouseResult");

mouseBox.addEventListener("mouseover", function () {

    mouseResult.textContent = "Mouse entered the box";

});

mouseBox.addEventListener("mouseout", function () {

    mouseResult.textContent = "Mouse left the box";

});


// 3. DOUBLE CLICK

const doubleBtn = document.getElementById("doubleBtn");
const doubleResult = document.getElementById("doubleResult");

doubleBtn.addEventListener("dblclick", function () {

    doubleResult.textContent = "Double clicked!";

});


// 4. KEYBOARD EVENT

const keyboardInput =
    document.getElementById("keyboardInput");

const keyboardResult =
    document.getElementById("keyboardResult");

keyboardInput.addEventListener("keydown", function (event) {

    keyboardResult.textContent =
        "You pressed: " + event.key;

});


// 5. INPUT EVENT

const nameInput =
    document.getElementById("nameInput");

const nameResult =
    document.getElementById("nameResult");

nameInput.addEventListener("input", function () {

    nameResult.textContent =
        "Your name is: " + nameInput.value;

});


// 6. CHANGE EVENT

const course =
    document.getElementById("course");

const courseResult =
    document.getElementById("courseResult");

course.addEventListener("change", function () {

    courseResult.textContent =
        "You selected: " + course.value;

});


// 7. SUBMIT + preventDefault()

const myForm =
    document.getElementById("myForm");

const formResult =
    document.getElementById("formResult");

myForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    formResult.textContent =
        "Hello " + username + "! Form submitted.";

});


// 8. EVENT OBJECT

const eventBtn =
    document.getElementById("eventBtn");

const eventResult =
    document.getElementById("eventResult");

eventBtn.addEventListener("click", function (event) {

    console.log(event);

    console.log(event.target);

    eventResult.textContent =
        "Clicked element: " +
        event.target.textContent;

});
