function checkEmpty(checkInput, idWarning) {
  if (checkInput) {
    document.getElementById(idWarning).innerHTML = "";
    return true;
  } else {
    document.getElementById(idWarning).innerHTML = "Xin Nhập giữ liệu.";
    return false;
  }
}

function checkEmail(checkInput, idWarning) {
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var passed = regexEmail.test(checkInput);
  if (passed) {
    document.getElementById(idWarning).innerHTML = "";
    return true;
  } else {
    document.getElementById(idWarning).innerHTML = "Xin Nhập Đúng Email.";
    return false;
  }
}
