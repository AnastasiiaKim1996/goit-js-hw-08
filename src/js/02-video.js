//  - import -  //

import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

// --- function for Vimeo-Player  ---//

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', Throttle(saveTime, 1000));

function saveTime(event) {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}

setCurrentTime();

function setCurrentTime() {
  const localTime = localStorage.getItem(STORAGE_KEY);
  if (localTime) {
    player.setCurrentTime(localTime);
  }
}

//--- first solution ---//

// function saveTime() {
//   player
//     .getCurrentTime()
//     .then(function (seconds) {
//       localStorage.setItem(STORAGE_KEY, seconds);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// player.on('timeupdate', Throttle(saveTime, 1000));

// const currentTime = localStorage.getItem(STORAGE_KEY) || 0;

// player.setCurrentTime(currentTime).catch(function (error) {
//   console.log(error);
// });
