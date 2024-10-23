document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    console.log("Login credentials:", email, password);

    // You should send these credentials to your backend here using fetch or axios
    // For example:
    // fetch('/api/login', { method: 'POST', body: { email, password } })

    // Redirect after successful login (you'll need to implement authentication logic)
    window.location.href = "index.html";  // Redirect to main page after successful login
};
