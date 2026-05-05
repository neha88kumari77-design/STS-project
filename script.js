// Scroll to form
function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({
        behavior: "smooth"
    });
}

// Show result on form submit
document.getElementById("estimateForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("result").style.display = "block";
});
// Signup validation
let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        let pass = document.getElementById("password").value;
        let confirm = document.getElementById("confirmPassword").value;
        let error = document.getElementById("error");

        if (pass !== confirm) {
            e.preventDefault();
            error.innerText = "Passwords do not match!";
        }
    });
}
function goToReceipt(e) {
    e.preventDefault();
    window.location.href = "receipt.html";
}
function track() {
    document.getElementById("trackResult").style.display = "block";
}
if (input.value === "") {
    alert("Please fill all fields");
}