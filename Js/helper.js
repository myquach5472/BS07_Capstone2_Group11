document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var userData = getRegister();
    if (userData) {
      registerUser(userData);
      document.getElementById("registrationForm").reset();
    }
  });

function getRegister() {
  var user = new User();

  user.email = document.getElementById("email").value;
  user.name = document.getElementById("name").value;
  user.password = document.getElementById("password").value;
  user.passwordConfirm = document.getElementById("password-confirm").value;
  user.phone = document.getElementById("phone").value;

  var genderRadios = document.getElementsByName("gender");
  for (var i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      user.gender = genderRadios[i].value === "male";
      break;
    }
  }

  var valid = true;
  valid =
    checkEmpty(user.name, "tbName") &
    checkEmpty(user.email, "tbEmail") &
    checkEmpty(user.password, "tbPass") &
    checkEmpty(user.passwordConfirm, "tbPassConfirm") &
    checkEmpty(user.phone, "tbPhone") &
    checkEmpty(user.gender, "tbGender");
  valid = checkEmail(user.email, "tbEmail");

  if (!valid) {
    return null;
  }

  return {
    email: user.email,
    password: user.password,
    name: user.name,
    gender: user.gender === "true",
    phone: user.phone,
  };
}
