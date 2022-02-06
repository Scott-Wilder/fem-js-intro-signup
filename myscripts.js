const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

if(form) {
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
}

function checkInputs() {
  // get values from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === '') {
    // show error
    // add error class
    setErrorFor(fname, 'First Name cannot be blank');
  } else {
    // add success class
    setSuccessFor(fname);
  }
  if (lnameValue === '') {
    // show error
    // add error class
    setErrorFor(lname, 'Last Name cannot be blank');
  } else {
    // add success class
    setSuccessFor(lname);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 5) {
    setErrorFor(password, 'Password cannot be less than 5 characters');
  } else {
    setSuccessFor(password);
  }

}
// error class
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}