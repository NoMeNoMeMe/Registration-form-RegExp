
function validate() {
  let login = document.getElementsByName('login')[0].value;
  let pass = document.getElementsByName('password')[0].value;
  let pass2 = document.getElementsByName('password2')[0].value;
  let email = document.getElementsByName('email')[0].value;
  let phone = document.getElementsByName('phone')[0].value;
  let post_code = document.getElementsByName('post')[0].value;
  let btn = document.getElementById('accept');
  if (checkLogin(login) && checkMail(email) && checkPass(pass) && checkPassSame(pass, pass2) && checkPhone(phone) && checkPost(post_code)) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
}

function checkLogin(login) {
  let loginLen = login.length;
  let result = false;
  if (loginLen >= 4) {
    document.getElementsByName('login')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('login')[0].style.background = 'red';
    result = false;
  }
  return result;
}

function checkPass(pass) {
  passLen = pass.length;
  hasDigit = /\d+/;
  hasSmall = /[a-z]+/;
  hasBig = /[A-Z]+/;
  hasSpecial = /\W+/;
  let result = false;
  if (passLen >= 8 && hasDigit.test(pass) && hasSmall.test(pass) && hasBig.test(pass) && hasSpecial.test(pass)) {
    document.getElementsByName('password')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('password')[0].style.background = 'red';
    result = false;
  }
  return result;
}

function checkPhone(phone) {
  isPhone = /^\+48\d{9}$/;
  let result = false;
  if (isPhone.test(phone)) {
    document.getElementsByName('phone')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('phone')[0].style.background = 'red';
    result = false;
  }
  return result;
}

function checkPost(post) {
  let isPost = /^\d{2}-\d{3}$/;
  let result = false;
  if (isPost.test(post)) {
    document.getElementsByName('post')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('post')[0].style.background = 'red';
    result = false;
  }
  return result;
}

function checkMail(email) {
  let isMail = /^(\w+)@(\w+\.\w+)$/;
  let result = false;
  if (isMail.test(email)) {
    document.getElementsByName('email')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('email')[0].style.background = 'red';
    result = false;
  }
  return result;
}

function checkPassSame(pass1, pass2) {
  let result = false;
  if (pass1 == pass2) {
    document.getElementsByName('password')[0].style.background = 'white';
    document.getElementsByName('password2')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('password')[0].style.background = 'yellow';
    document.getElementsByName('password2')[0].style.background = 'yellow';
    result = false;
  }
  return result;
}



window.addEventListener("load", function() {
  document.querySelectorAll('.inp').forEach(inp => {
    inp.addEventListener('input', validate);
  });
});
