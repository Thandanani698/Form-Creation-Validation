document.addEventListener('DOMContentLoaded', function() {
    // Select form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Function to handle form validation
    function validateForm(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Retrieve user inputs and trim any leading/trailing whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation (at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation (must include '@' and '.')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation (at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success message color
            feedbackDiv.classList.remove('error');
            feedbackDiv.classList.add('success');
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Error message color
            feedbackDiv.classList.remove('success');
            feedbackDiv.classList.add('error');
        }
    }

    // Add event listener to the form for the 'submit' event
    form.addEventListener('submit', validateForm);
});
