const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

let errors = [];

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = ''; // Clear content
    errors = []; // Reset errors array

    // Validate inputs
    if (usernameInput.value.trim() === '') {
        errors.push('Username is required.');
    }

    if (!validateEmail(emailInput.value)) {
        errors.push('Please enter a valid email.');
    }

    if (passwordInput.value.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        errors.push('Passwords do not match.');
    }

    if (errors.length > 0) {
        showError(errors);
        return;
    }

    // If no errors, show success message
    showSuccessMessage();
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(messages) {
    const ul = document.createElement('ul'); // Create an unordered list
    ul.style.color = 'red'; // Set error color

    messages.forEach((message) => {
        const li = document.createElement('li'); // Create a list item for each error
        li.textContent = message;
        ul.appendChild(li);
    });

    errorMessage.appendChild(ul); // Append the list to the error message container
    errorMessage.style.display = 'block'; // Show the error messages
}

function showSuccessMessage() {
    errorMessage.textContent = 'Account created successfully!';
    errorMessage.style.color = 'green';
    errorMessage.style.display = 'block';
}
