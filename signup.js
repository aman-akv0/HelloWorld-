document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    console.log("Signup credentials:", email, password);

    // You should send these credentials to your backend to create a user and send an email verification
    // For example:
    // fetch('/api/signup', { method: 'POST', body: { email, password } })

    // After successful signup, display message or redirect to login page
    alert("Signup successful! Please check your email for verification.");
    window.location.href = "login.html";  // Redirect to login after signup
};
