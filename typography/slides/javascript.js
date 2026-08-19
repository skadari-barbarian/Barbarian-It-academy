function show(message) {
    console.log(message);

    document.getElementById("output").innerHTML +=
        "<p>" + message + "</p>";
}

function firstTask() {
    show("1. First function");
}


function secondTask() {
    show("2. Second function");
    firstTask();
}

function getData() {

    return new Promise(function (resolve) {

        setTimeout(function () {
            resolve("6. Data received");
        }, 1000);

    });
}

async function asyncTask() {

    show("5. Waiting for data...");

    const result = await getData();

    show(result);

    show("7. Async function completed");
}

function runExample() {

    document.getElementById("output").innerHTML = "";

    show("Start");

    
    secondTask();

    show("3. Synchronous task completed");

    setTimeout(function () {
        show("4. setTimeout task");
    }, 2000);

    asyncTask();

    show("8. End");
}