const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    let valid = true;
    const emailInput = document.getElementById("email");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        alert("Enter a valid email address");
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if there are validation errors
    }
});