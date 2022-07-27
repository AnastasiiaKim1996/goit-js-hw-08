//  - import -  //

import throttle from 'lodash.throttle';

// --- function for Feedback form ---//

const feedbackForm = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const localStorageValues = {
  email: '',
  message: '',
};

const onFormSubmit = e => {
  e.preventDefault();
  if (localStorageValues.email === '' || localStorageValues.message === '') {
    return alert(
      'Please fill out the form and send it by clicking on submit form'
    );
  }
  if (localStorage.getItem(STORAGE_KEY)) {
    console.log(localStorage.getItem(STORAGE_KEY));
  }
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const onEmailInput = e => {
  localStorageValues.email = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues));
};

const onMessageInput = e => {
  localStorageValues.message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValues));
};

const saveInfo = () => {
  let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    localStorageValues.email = savedMessage.email;
    localStorageValues.message = savedMessage.message;
    feedbackForm.email.value = localStorageValues.email;
    feedbackForm.textarea.value = localStorageValues.message;
  }
};

feedbackForm.form.addEventListener('submit', onFormSubmit);
feedbackForm.email.addEventListener('input', throttle(onEmailInput, 500));
feedbackForm.textarea.addEventListener('input', throttle(onMessageInput, 500));
saveInfo();

//--- second solution ---//

// const feedbackForm = document.querySelector('.feedback-form');
// const formData = localStorage.getItem('feedback-form-state')
//   ? JSON.parse(localStorage.getItem('feedback-form-state'))
//   : {};

// feedbackForm.addEventListener('input', throttle(onFormInput, 500));
// feedbackForm.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const localKetParsed = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );
//   const email = e.currentTarget.elements.email.value;
//   const message = e.currentTarget.elements.message.value;
//   if (email === '' || message === '') {
//     return alert(
//       'Please fill out the form and send it by clicking on submit form'
//     );
//   }

//   e.currentTarget.reset();
//   localStorage.removeItem('feedback-form-state');
// }

// function onFormInput({ target }) {
//   formData[target.name] = target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function setFormValues() {
//   const savedInfo = localStorage.getItem('feedback-form-state');
//   if (savedInfo) {
//     const data = JSON.parse(savedInfo);
//     if (data.email) {
//       feedbackForm.elements.email.value = data.email;
//     }
//     if (data.message) {
//       feedbackForm.elements.message.value = data.message;
//     }
//   }
// }

// setFormValues();
