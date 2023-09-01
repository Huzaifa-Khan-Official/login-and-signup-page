var currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
    var singleData = {
        email : signupEmail.value,
        password : signupPassword.value
    }
    users.push(singleData);
    localStorage.setItem("users", JSON.stringify(users));
    signupEmail.value = "";
    signupPassword.value = "";
    location.href = "../login/login.html";
}