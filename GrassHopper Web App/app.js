//extract input from the contact form
const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

// add a listerner to save data from the input fields and show successfull alert when successfull
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    alert.style.display = "block"

    setTimeout(() => {
        alert.style.display = "none"
    }, 2000)
    form.reset();
})