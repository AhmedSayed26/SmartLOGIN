var btn = document.getElementById("btn");
var email = document.getElementById("email");
var password = document.getElementById("password");

btn.addEventListener("click", function () {
  var users = JSON.parse(localStorage.getItem("users"));
  // console.log(users);
  // console.log(email, password);
  var enteredEmail = email.value;
  var enteredPassword = password.value;
  var UserEmail = users.find(function (user) {
    return user.email === enteredEmail;
  });

  function message(text, color) {
    var message = document.createElement("p");
    message.id = "ErrorMessage";
    message.textContent = text;
    message.style.color = color;
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    btn.after(message);
    return message;
  }
  var ErrorMessage = document.getElementById("ErrorMessage");
  if (ErrorMessage) {
    ErrorMessage.remove();
  }

  if (enteredEmail === "" || enteredPassword === "") {
    message("All inputs is required!", "red");
    return;
  }
  if (!UserEmail) {
    message("User not found!", "red");
    return;
  } else if (UserEmail.password !== enteredPassword) {
    message("Incorrect password!", "red");
    return;
  } else {
    localStorage.setItem("username", UserEmail.name);
    // console.log(UserEmail);
    // console.log(UserEmail.name);
    btn.setAttribute("href", "./home/home.html");
    btn.click();
    // window.location.href = "home.html";
  }
});
