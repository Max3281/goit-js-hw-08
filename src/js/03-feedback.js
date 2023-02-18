import throttle from 'lodash.throttle';

const formMarkEl = document.querySelector('.feedback-form');
// const inputMarkEl = document.querySelector('input');
// const textMarkEl = document.querySelector('textarea');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

loadFromStorage();

formMarkEl.addEventListener('input', throttle(saveOnStorage, 1000));
// formMarkEl.addEventListener('submit', onButtonMark);

function saveOnStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // return formData;
}

// function onInputMark(evt) {
//   saveOnStorage(evt);
//   //   console.log(evt.target.value);
// }

// function onTextMark(evt) {
//   saveOnStorage(evt);
//   //   console.log(formData);
// }

function loadFromStorage() {
  try {
    let checkStorage = localStorage.getItem(STORAGE_KEY);
    if (checkStorage) {
      formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
      Object.entries(formData).forEach(([name, value]) => {
        formMarkEl[name] = value;
        // console.log((formMarkEl[name] = value));
      });
      console.log(formData);
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

formMarkEl.addEventListener('submit', onButtonMark);

function onButtonMark(evt) {
  evt.preventDefault();
  console.log(formData);
  formMarkEl.reset();
}
