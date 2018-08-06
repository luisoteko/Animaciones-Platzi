const $pelota = document.getElementById('pelota')

console.log($pelota);

const animation = $pelota.animate([
  {
    transform: 'translateX(0)'
  },
  {
    transform: 'translateX(500px)'
  }
], {
  duration: 1000,
  delay: 1000,
  direction: 'normal',
  easing: 'linear',
  iterations: Infinity,
  fill: 'forwards',
  iterationStart: .5,
  // endDelay: 5000,
})

const $playButton = document.getElementById("play")
const $pauseButton = document.getElementById("pause")
const $stopButton = document.getElementById("stop")
const $forwardsButton = document.getElementById("forwards")

$playButton.addEventListener('click', (event)=>{
  animation.play()
})
$pauseButton.addEventListener('click', (event) => {
  animation.pause()
})
$stopButton.addEventListener('click', (event) => {
  animation.cancel()
})
$forwardsButton.addEventListener('click', (event) => {
  animation.reverse()
})
