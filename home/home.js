var username = localStorage.getItem("username");
var logout = document.getElementById("Logout");

if (username) {
  var usernameElement = document.getElementById("usernameDisplay");
  usernameElement.textContent = "Welcome, " + username + " ";
} else {
  console.log("No user logged in.");
}
logout.addEventListener("click", function () {
  localStorage.removeItem("username");
  window.location.href = "../index.html";
});
