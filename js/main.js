document.forms[0].onsubmit = function (e) {
  let regex = /\w+@[a-z]{2,}\.[a-z]{2,}/gi;

  if (regex.test(document.querySelector('input[type="text"]').value)) {
    document.querySelector(".error-mesg").classList.remove("active");
  } else {
    document.querySelector(".error-mesg").classList.add("active");
  }

  e.preventDefault();
};
