import throttle from 'lodash.throttle';

const formMarkEl = document.querySelector('.feedback-form');
const inputMarkEl = document.querySelector('input');
const textMarkEl = document.querySelector('textarea');

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

loadFromStorage();

inputMarkEl.addEventListener('input', throttle(onInputMark, 1000));
textMarkEl.addEventListener('input', throttle(onTextMark, 1000));

function saveOnStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // return formData;
}

function onInputMark(evt) {
  saveOnStorage(evt);
  //   console.log(evt.target.value);
}

function onTextMark(evt) {
  saveOnStorage(evt);
  //   console.log(formData);
}

function loadFromStorage() {
  let checkStorage = localStorage.getItem(STORAGE_KEY);
  if (checkStorage) {
    const checkStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    Object.entries(checkStorage).forEach(([name, value]) => {
      formData[name] = value;
      checkStorage[name] = value;
    });
    inputMarkEl.value = checkStorage.email || '';
    textMarkEl.value = checkStorage.message || '';
  }
}

formMarkEl.addEventListener('submit', onButtonMark);

function onButtonMark(evt) {
  evt.preventDefault();
  console.log(formData);
  formMarkEl.reset();
}
