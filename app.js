const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const radioBtns = document.querySelectorAll('input[type="radio"]');
const messageTxtArea = document.getElementById('message');
const consent = document.getElementById('consent');
const errorMessages = document.querySelectorAll('.error-message');
const dialog = document.querySelector('dialog');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
})

function validateForm() {

  callValidatingFunctions();

if (!isEmpty(firstName) &&
    !isEmpty(lastName) && 
    !isEmpty(messageTxtArea) &&
    isEmailValid(email) && 
    isChecked(consent) &&
    isOneRadioChecked(Array.from(radioBtns))) {
      dialog.show();
    }  else {
      dialog.close()
    }
}

function callValidatingFunctions() {
  isEmpty(firstName);
  isEmpty(lastName);
  isEmpty(messageTxtArea) 
  isEmailValid(email);
  isChecked(consent);
  isOneRadioChecked(Array.from(radioBtns));
}

function isEmpty(input) {
   if (!input.value) {
    input.ariaInvalid = 'true'; 
    handleErrorMsg(input);
    return true;
   } else {
    input.ariaInvalid = 'false'; 
    handleErrorMsg(input);
    return false;
   }
}

function isEmailValid(input) {
  const emailPattern = /^[A-Za-z0-9.-]+@[a-z]+.[a-z]{2,}$/;
  if (emailPattern.test(input.value)) {
    input.ariaInvalid = 'false';
    handleErrorMsg(input);
    return true;
  } else {
    input.ariaInvalid = 'true'; 
    handleErrorMsg(input);
    return false;
  }
}

function isChecked(input) {
  if (input.checked) {
    input.ariaInvalid = 'false';
    handleErrorMsg(input);
    return true;
  } else {
    input.ariaInvalid = 'true'; 
    handleErrorMsg(input);
    return false;
  }
}

function isOneRadioChecked(radios) {
 if (radios.some(isChecked)) {
    return true;
 } else {
  return false;
 }
}

function handleErrorMsg(input) {
  if (input.ariaInvalid === 'true') {
    showError(input);
  } else {
    hideError(input);
  }
}

function showError(input) {
  input.classList.add('invalid');
  errorMessages.forEach(msg => {
    if (msg.id === input.getAttribute('aria-describedby')) {
      msg.classList.remove('hidden');
    }
  })
}

function hideError(input) {
  input.classList.remove('invalid');
errorMessages.forEach(msg => {
  if (msg.id === input.getAttribute('aria-describedby')) {
    msg.classList.add('hidden');
  }
 })
}
