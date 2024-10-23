// Initialize CodeMirror for each editor
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
    mode: "htmlmixed",  
    theme: "default",
    lineNumbers: true,
    autoCloseBrackets: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    viewportMargin: Infinity,
    lineWrapping: true,        
    hintOptions: {
        htmlHints: true          
    }
});

// Trigger autocomplete automatically for HTML
htmlEditor.on("inputRead", function(cm, change) {
    if (change.text[0].length > 0) {
        cm.showHint({ hint: CodeMirror.hint.html });
    }
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
    mode: "css",
    theme: "default",
    lineNumbers: true,
    autoCloseBrackets: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    viewportMargin: Infinity,
    lineWrapping: true,        
    hintOptions: {
        cssHints: true           
    }
});

// Trigger autocomplete automatically for CSS
cssEditor.on("inputRead", function(cm, change) {
    if (change.text[0].length > 0) {
        cm.showHint({ hint: CodeMirror.hint.css });
    }
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
    autoCloseBrackets: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    viewportMargin: Infinity,
    lineWrapping: true,        
    hintOptions: {
        javascriptHints: true     
    }
});

// Trigger autocomplete automatically for JavaScript
jsEditor.on("inputRead", function(cm, change) {
    if (change.text[0].length > 0) {
        cm.showHint({ hint: CodeMirror.hint.javascript });
    }
});

// Tab switching function
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    const tabButtons = document.getElementsByClassName("tab-button");

    // Hide all tabs and remove active class
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the clicked tab and add active class
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Run code function
function runCode() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`;
    const jsCode = `<script>${jsEditor.getValue()}<\/script>`;
    
    const outputFrame = document.getElementById("output").contentWindow.document;
    
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}

// Save and export code functions
function saveCode() {
    localStorage.setItem("htmlCode", htmlEditor.getValue());
    localStorage.setItem("cssCode", cssEditor.getValue());
    localStorage.setItem("jsCode", jsEditor.getValue());
    alert("Code saved!");
}

function exportCode() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const jsCode = jsEditor.getValue();

    const blob = new Blob([`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `], { type: "text/html" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "my_code.html";
    link.click();
}

// Autoload saved code
window.onload = function() {
    if (localStorage.getItem("htmlCode")) {
        htmlEditor.setValue(localStorage.getItem("htmlCode"));
    }
    if (localStorage.getItem("cssCode")) {
        cssEditor.setValue(localStorage.getItem("cssCode"));
    }
    if (localStorage.getItem("jsCode")) {
        jsEditor.setValue(localStorage.getItem("jsCode"));
    }
};

// Start Coding Button
document.getElementById('startCodingBtn').onclick = function() {
    document.querySelector('.intro-section').style.display = 'none';
    document.querySelector('.tabs').style.display = 'flex';
    document.querySelector('.editors').style.display = 'flex';
    document.querySelector('.action-buttons').style.display = 'flex';
    document.querySelector('.output-container').style.display = 'block';
};

// Login and Signup Form Handlers
document.addEventListener("DOMContentLoaded", function() {
    // Login form submission handler
    document.getElementById("loginForm").onsubmit = function(event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        console.log("Login credentials:", email, password);

        // Simulated login process (replace with actual API request)
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to main page after successful login
    };

    // Signup form submission handler
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

        // Simulated signup process (replace with actual API request)
        alert("Signup successful! Please check your email for verification.");
        window.location.href = "login.html";  // Redirect to login after signup
    };
});

const text = "HELLO WORLD!";
const animatedText = document.getElementById("animated-text");

function animateText() {
    animatedText.innerHTML = ''; // Clear previous spans

    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        animatedText.appendChild(span);
        
        setTimeout(() => {
            span.classList.add("animate");
        }, index * 300); // Adjust delay as needed
    });

    // Reset the animation after a delay
    setTimeout(() => {
        const spans = animatedText.querySelectorAll("span");
        spans.forEach(span => {
            span.classList.remove("animate"); // Remove the animate class
        });
        // Restart the animation after a short delay
        setTimeout(animateText, 1000); // Adjust the delay before restarting
    }, text.length * 300 + 1000); // Wait for the animation to complete before resetting
}

// Start the animation
animateText();
