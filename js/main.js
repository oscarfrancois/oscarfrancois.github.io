window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
    message.innerHTML += "<br>service worker found"
  }
  if ('bluetooth' in navigator) {
    message.innerHTML += "<br>bluetooth api found"
  }

  if ('bluetooth' in navigator && 'requestDevice' in navigator.bluetooth) {
    message.innerHTML += "<br>bluetooth requestDevice method found"
  }

  message.innerHTML += "<br>" + JSON.stringify(Object.keys(navigator.__proto__))

}
