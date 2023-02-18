import throttle from 'lodash.throttle';

const formMarkEl = document.querySelector('.feedback-form');

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

loadFromStorage();

formMarkEl.addEventListener('input', throttle(saveOnStorage, 1000));

function saveOnStorage(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromStorage() {
  try {
    let checkStorage = localStorage.getItem(STORAGE_KEY);
    if (checkStorage) {
      formData = JSON.parse(checkStorage);
      console.log(formData);
      Object.entries(formData).forEach(([name, value]) => {
        formMarkEl[name].value = value;
        console.log(formMarkEl[name]);
      });
    }
  } catch (error) {
    console.log(error.name, ': ', error.message);
  }
}

formMarkEl.addEventListener('submit', onButtonMark);

function onButtonMark(evt) {
  evt.preventDefault();
  console.log(formData);
  formMarkEl.reset();
}
