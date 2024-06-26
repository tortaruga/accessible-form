const inputElements = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const radioBtns = document.querySelectorAll('input[type="radio"]');


const form = document.querySelector('form');

const firstNameError = document.getElementById('first-name-error');
const errorMessages = document.querySelectorAll('.error-message');

let isRadioChecked;


const successDialog = document.querySelector('dialog')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
    console.log('koroshite kudasai')
    
    // successDialog.show()
   
})

function validateForm() {
  inputElements.forEach(input => {

if (input.id === 'first-name') {
    console.log(input.id);
    validateName(input);
    handleErrorMsg(input);
} else if (input.id === 'last-name') {
    validateName(input);
    console.log(input.id);
    handleErrorMsg(input);
} else if (input.id === 'email-address') {
    console.log(input.id);
    validateEmail(input);
    handleErrorMsg(input); 
} else if (input.id === 'consent') {
    console.log(input.id);
    isChecked(input);
    handleErrorMsg(input); 
}

  })

  if (!textarea.value) {
    textarea.ariaInvalid = 'true';
  } else {
    textarea.ariaInvalid = 'false';
  }
  handleErrorMsg(textarea);
  console.log(textarea.ariaInvalid)


  const isRadioChecked = (btn) => btn.checked; 

  if (!(Array.from(radioBtns).some(isRadioChecked))) {
    radioBtns[0].ariaInvalid = 'true';    
  } else {
    radioBtns[0].ariaInvalid = 'false';
  }
  handleErrorMsg(radioBtns[0]);
  console.log(radioBtns[0].ariaInvalid)

  if (Array.from(inputElements).every(input => input.ariaInvalid === 'false') && textarea.ariaInvalid === 'false' && radioBtns[0].ariaInvalid === 'false') {
        inputElements.forEach(input => console.log(input.ariaInvalid))
        successDialog.show();
      }
}


function validateName(input) {
  if (!input.value) { 
        input.ariaInvalid = 'true';
  } else {
    input.ariaInvalid = 'false';
  }
  console.log(input.ariaInvalid)

}


function validateEmail(input) {
    let emailPattern = /^[A-Za-z0-9-.]+@[a-z]+.[a-z]{2,}$/;
    if (!emailPattern.test(input.value)) {
        input.ariaInvalid = 'true';
    } else {
        input.ariaInvalid = 'false';
    }
    console.log(input.ariaInvalid)

}

function isChecked(input) {
   if (!input.checked) {
    input.ariaInvalid = 'true';
    console.log(input.ariaInvalid);
   } else {
    input.ariaInvalid = 'false';
   }
   console.log(input.ariaInvalid)
   
}

function handleErrorMsg(input) {
  if (input.ariaInvalid === 'true') {
     errorMessages.forEach(msg => {
        if (msg.getAttribute('id') === input.getAttribute('aria-describedby')) {
            msg.classList.remove('hidden');
            input.classList.add('invalid')
        }
     })
  }  else {
    errorMessages.forEach(msg => {
        if (msg.getAttribute('id') === input.getAttribute('aria-describedby')) {
            msg.classList.add('hidden');
            input.classList.remove('invalid')
        }
  })
 }
}
