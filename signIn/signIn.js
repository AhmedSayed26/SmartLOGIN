var signIn = document.getElementById("signIn");
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");

var btn = document.getElementById("btn");
let users = [];
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}
btn.addEventListener("click", function () {
  var enteredEmail = email.value;
  var existingUser = users.find(function (user) {
    return user.email === enteredEmail;
  });
  function message(text, color) {
    var message = document.createElement("p");
    message.id = "messageError";
    message.textContent = text;
    message.style.color = color;
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    btn.after(message);
    return message;
  }
  var messageError = document.getElementById("messageError");
  if (messageError) {
    messageError.remove();
  }
  if (username.value === "" || email.value === "" || password.value === "") {
    message("All inputs are required!", "red");
    return;
  }
  if (existingUser) {
    message("User already exists!", "red");
    return;
  } else {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
      message("Wrong email format!", "red");
      return;
    } else {
      let newUser = {
        name: username.value,
        email: email.value,
        password: password.value,
      };
      users.push(newUser);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));
      message("User registered successfully!", "green");
    }
  }
});
