document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform form validation here
        const password = document.getElementById('user_password').value;
        const confirmPassword = document.getElementById('user_confirm_password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Form submission logic
        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Form submitted with data:', formObject);
        alert('Form submitted successfully!');
    });
});
