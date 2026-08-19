function validateform() {
    let code = document.getElementById("code").value;
    let samplecode = document.getElementById("samplecode").value;

    if (code === samplecode) {
        console.log("Thank You");
        alert("Thank You");
    } else {
        console.log("Error");
        alert("Error");
    }

    return false;
}

function generateCode() {
    
    let randomCode = Math.floor(Math.random() * 900000) + 100000;

    document.getElementById("samplecode").value = randomCode;
}


generateCode();


setInterval(() => {
    generateCode();
}, 60000);