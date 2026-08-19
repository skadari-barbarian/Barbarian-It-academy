// ==========================================
// JAVASCRIPT PROMISES - PRACTICE
// ==========================================


// 1. Creating a Promise
const myPromise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Promise completed successfully");
    } else {
        reject("Promise failed");
    }

});


// 2. Consuming a Promise using then()
myPromise.then(function(result) {

    console.log(result);

});


// 3. Handling errors using catch()
const failedPromise = new Promise(function(resolve, reject) {

    reject("Something went wrong");

});

failedPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


// 4. Promise with setTimeout()
function getData() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve("Data received after 2 seconds");

        }, 2000);

    });

}

getData().then(function(data) {

    console.log(data);

});


// 5. Promise with resolve and reject
function checkNumber(number) {

    return new Promise(function(resolve, reject) {

        if (number > 0) {

            resolve("Number is positive");

        } else {

            reject("Number is not positive");

        }

    });

}

checkNumber(10)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


// 6. Promise chaining
function firstTask() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            console.log("First task completed");

            resolve();

        }, 1000);

    });

}

function secondTask() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            console.log("Second task completed");

            resolve();

        }, 1000);

    });

}

firstTask()
    .then(function() {

        return secondTask();

    })
    .then(function() {

        console.log("All tasks completed");

    });


// 7. finally()
const finalPromise = new Promise(function(resolve) {

    resolve("Task completed");

});

finalPromise
    .then(function(result) {

        console.log(result);

    })
    .catch(function(error) {

        console.log(error);

    })
    .finally(function() {

        console.log("Promise execution finished");

    });


// 8. Async function
async function asyncTask() {

    console.log("Async function started");

}

asyncTask();


// 9. await
function fetchData() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve("Data successfully fetched");

        }, 2000);

    });

}

async function getResult() {

    console.log("Waiting for data...");

    const result = await fetchData();

    console.log(result);

}

getResult();


// 10. async + await + try/catch
function loginUser() {

    return new Promise(function(resolve, reject) {

        let loggedIn = true;

        setTimeout(function() {

            if (loggedIn) {

                resolve("Login successful");

            } else {

                reject("Login failed");

            }

        }, 1000);

    });

}

async function login() {

    try {

        const result = await loginUser();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

login();


// 11. Promise.all()
const task1 = Promise.resolve("Task 1 completed");
const task2 = Promise.resolve("Task 2 completed");
const task3 = Promise.resolve("Task 3 completed");

Promise.all([task1, task2, task3])
    .then(function(results) {

        console.log("Promise.all result:");
        console.log(results);

    });


// 12. Promise.race()
const promise1 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Promise 1 finished");

    }, 2000);

});

const promise2 = new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Promise 2 finished");

    }, 1000);

});

Promise.race([promise1, promise2])
    .then(function(result) {

        console.log("Winner:");
        console.log(result);

    });


// 13. Real-life example
function orderFood() {

    return new Promise(function(resolve, reject) {

        let restaurantAvailable = true;

        setTimeout(function() {

            if (restaurantAvailable) {

                resolve("Food order placed");

            } else {

                reject("Restaurant is unavailable");

            }

        }, 1500);

    });

}

async function placeOrder() {

    try {

        console.log("Ordering food...");

        const result = await orderFood();

        console.log(result);

        console.log("Food is being prepared");

    } catch (error) {

        console.log(error);

    }

}

placeOrder();
