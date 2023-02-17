import throttle from 'lodash.throttle';

const formMarkEl = document.querySelector('.feedback-form');
const inputMarkEl = document.querySelector('input');
const textMarkEl = document.querySelector('textarea');

const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';

inputMarkEl.addEventListener('input', throttle(onInputMark, 1000));
textMarkEl.addEventListener('input', throttle(onTextMark, 1000));

function saveOnStorage(evt) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  return formData;
}

function onInputMark(evt) {
  formData.email = evt.target.value;
  saveOnStorage(evt);
  //   console.log(evt.target.value);
}

function onTextMark(evt) {
  formData.message = evt.target.value;
  saveOnStorage(evt);
  //   console.log(formData);
}

function loadFromStorage() {
  const checkStorage = localStorage.getItem(STORAGE_KEY);
  console.log(checkStorage);
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (checkStorage) {
    inputMarkEl.value = parseData.email || '';
    textMarkEl.value = parseData.message || '';
  }
}

loadFromStorage();

formMarkEl.addEventListener('submit', onButtonMark);

function onButtonMark(evt) {
  evt.preventDefault();
  console.log(formData);
  formMarkEl.reset();
}
