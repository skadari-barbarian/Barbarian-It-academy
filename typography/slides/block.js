function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields.");
        return false;
    }

    alert("Form submitted successfully!");
    console.log("Form submitted successfully!");

    return true;
}