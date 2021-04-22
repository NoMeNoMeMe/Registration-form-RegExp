
function validate() {
  let login = document.getElementsByName('login')[0].value;
  let pass = document.getElementsByName('password')[0].value;
  let btn = document.getElementById('accept');
  if (checkLogin(login) && checkPass(pass)) {
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
  let passLen = pass.length;
  let result = false;
  if (passLen >= 8) {
    document.getElementsByName('password')[0].style.background = 'white';
    result = true;
  }
  else {
    document.getElementsByName('password')[0].style.background = 'red';
    result = false;
  }
  return result;
}


window.addEventListener("load", function() {
  document.querySelectorAll('.inp').forEach(inp => {
    inp.addEventListener('input', validate);
  });
});
