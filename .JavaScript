// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact section
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        // Send form data to server or display success message
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        showSuccess(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
    } else {
        showSuccess(messageInput);
    }

    return isValid;
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorElement = formControl.querySelector('small');
    errorElement.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Fetch job listings from an API (example)
fetch('https://api.example.com/job-listings')
    .then(response => response.json())
    .then(data => {
        // Process job listings data and display on the website
    })
    .catch(error => console.error('Error fetching job listings:', error));
