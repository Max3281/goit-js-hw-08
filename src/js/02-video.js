import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function getTime(value) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(value.seconds)
  );
}

player.on('timeupdate', throttle(getTime, 1500));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// window.addEventListener('mousemove', throttle(onMouseMove, 3000));

// let mouseMoveCounter = 0;

// function onMouseMove(evt) {
//   mouseMoveCounter += 1;
//   console.log(mouseMoveCounter);
// }
