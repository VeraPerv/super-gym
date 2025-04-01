const nameInputReg = /^[A-Za-zА-Яа-яЁё\s]+$/;
const phoneInputReg = /^\d+$/;
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const errorNameField = document.querySelector('.field__error-name');
const errorPhoneField = document.querySelector('.field__error-phone');

const validateInput = (input,regex,errorContainer) => {
  const isValid = regex.test(input.value);
  input.classList.toggle('error', !isValid);
  if(!input.classList.contains('error')) {
    errorContainer.style.display = 'none';
  } else {
    errorContainer.style.display = 'block';
  }
  return isValid;
};
const feedbackForm = document.querySelector('.form');

const initValidation = () => {
  feedbackForm.addEventListener('submit',(evt) => {
    const nameInputIsValid = validateInput(nameInput,nameInputReg,errorNameField);
    let phoneInputIsValid = null;
    if(phoneInput.value) {
      phoneInputIsValid = validateInput(phoneInput,phoneInputReg,errorPhoneField);
    }
    if(!nameInputIsValid || !phoneInputIsValid) {
      evt.preventDefault();
    }
  });
};

export {initValidation };
