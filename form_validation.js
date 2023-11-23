const form1 = document.getElementById("myForm1");
const form2 = document.getElementById("myForm2");

form1.addEventListener("submit", function (event) {
    const input = document.getElementById("email");
    
    if (!checkPattern(input)) {
        event.preventDefault(); // Prevent form submission if there are validation errors
        return;
    }
    
    event.preventDefault();
    form1.nextElementSibling.style.display = "block";
    form1.style.display = "none";
});

form2.addEventListener("submit", function (event) {
    const input = document.getElementById("name");

    if (input == "") {
        event.preventDefault(); // Prevent form submission if there are validation errors
        return;
    }

    event.preventDefault();
    form2.nextElementSibling.innerHTML = "Thank you! We will contact you!";
    notifyMe();
});

document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    if (Notification.permission !== "granted")
        Notification.requestPermission();
});

function notifyMe() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('Email contact', {
            body: "Thank you! We will contact you!",
        });
    }
};

function checkPattern (input) {
    let valid = true;
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!pattern.test(input.value)) {
        valid = false;
        alert(`Enter a valid email!`);
    }
    return valid;
};