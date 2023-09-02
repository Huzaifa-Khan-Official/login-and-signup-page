var currentUser = JSON.parse(localStorage.getItem('currentUser')) || "";

if (currentUser === "") {
    location.href = "./signup/signup.html";
}

var greet = document.querySelector(".greet");
greet.innerHTML = `<h1>Welcome ${currentUser.email}</h1>`;

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}