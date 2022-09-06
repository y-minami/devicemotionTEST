const $x = document.querySelector('.x');
const $y = document.querySelector('.y');
const $z = document.querySelector('.z');

window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
  $x.innerText = event.acceleration.x;
  $y.innerText = event.acceleration.y;
  $z.innerText = event.acceleration.z;
});

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
      })
    }
  }).catch(console.error);
} else {
  alert('DeviceMotionEvent.requestPermission is not found')
}