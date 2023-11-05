const formObject = {
    formName: "myForm",
    inputName: "email",
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,

    checkPattern: function (input) {
        let valid = true;
        if (!formObject.pattern.test(input.value)) {
            valid = false;
            alert(`Enter a valid ${formObject.inputName}!`);
        }
        return valid;
    },
};

const form = document.getElementById(formObject.formName);

form.addEventListener("submit", function (event) {
    const input = document.getElementById(formObject.inputName);
    //console.log("input is"input);
    if (!formObject.checkPattern(input)) {
        event.preventDefault(); // Prevent form submission if there are validation errors
        return;
    }
    var formSelect = document.querySelector('form');
    formSelect.style.display = 'none';
    formSelect.nextElementSibling.innerHTML = "Thank you! We will contact you!";
    notifyMe();
})

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
}