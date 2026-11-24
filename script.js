const signinForm = document.querySelector("#signin-form");
const signupForm = document.querySelector("#signup-form");

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Sign-in details submitted.");
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = document.querySelector("#signup-password");
    const confirmPassword = document.querySelector("#confirm-password");

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPassword.reportValidity();
        return;
    }

    confirmPassword.setCustomValidity("");
    alert("Account created successfully.");
});
