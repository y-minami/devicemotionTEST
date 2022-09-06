const $x = document.querySelector('.x');
const $y = document.querySelector('.y');
const $z = document.querySelector('.z');
const $mx = document.querySelector('.mx');
const $my = document.querySelector('.my');
const $mz = document.querySelector('.mz');
const $button = document.querySelector('button');
let maxX = 0;
let maxY = 0;
let maxZ = 0;

$button.addEventListener('click', function() {

  if (DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission().then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener("devicemotion", (event) => {
          if (!event.accelerationIncludingGravity) {
            alert('event.accelerationIncludingGravity is null');
            return;
          }
          $x.innerText = event.acceleration.x;
          $y.innerText = event.acceleration.y;
          $z.innerText = event.acceleration.z;
          maxX = Math.max(maxX, Math.abs(event.acceleration.x));
          maxY = Math.max(maxY, Math.abs(event.acceleration.y));
          maxZ = Math.max(maxZ, Math.abs(event.acceleration.z));
          $mx.innerText = maxX;
          $my.innerText = maxY;
          $mz.innerText = maxZ;
        })
      }
    }).catch(console.error);
  } else {
    alert('DeviceMotionEvent.requestPermission is not found')
  }

})
