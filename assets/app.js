var countDownDate = new Date('Dec 31, 2021 09:10:00').getTime()

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Output the result in an element with id="demo"
  document.querySelector('#countdown').innerHTML =
    hours + ':' + minutes + ':' + seconds + ' left'

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('demo').innerHTML = 'EXPIRED'
  }
}, 1000)

var upgradeTime = 172801
var seconds = upgradeTime
function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60)
  var hoursLeft = Math.floor(seconds - days * 86400)
  var hours = Math.floor(hoursLeft / 3600)
  var minutesLeft = Math.floor(hoursLeft - hours * 3600)
  var minutes = Math.floor(minutesLeft / 60)
  var remainingSeconds = seconds % 60
  function pad(n) {
    return n < 10 ? '0' + n : n
  }
  document.querySelectorAll('countdown').innerHTML =
    pad(hours) + ':' + pad(minutes) + ':' + pad(remainingSeconds) + ' left'
  if (seconds == 0) {
    clearInterval(countdownTimer)
    document.querySelectorAll('countdown').innerHTML = 'Completed'
  } else {
    seconds--
  }
}
var countdownTimer = setInterval('timer()', 1000)

// var upgradeTime = 172801
// var seconds = upgradeTime
// function timer() {
//   var days = Math.floor(seconds / 24 / 60 / 60)
//   var hoursLeft = Math.floor(seconds - days * 86400)
//   var hours = Math.floor(hoursLeft / 3600)
//   var minutesLeft = Math.floor(hoursLeft - hours * 3600)
//   var minutes = Math.floor(minutesLeft / 60)
//   var remainingSeconds = seconds % 60
//   function pad(n) {
//     return n < 10 ? '0' + n : n
//   }
//   document.querySelector('#countdown').innerHTML =
//     pad(hours) + ':' + pad(minutes) + ':' + pad(remainingSeconds) + ' left'
//   if (seconds == 0) {
//     clearInterval(countdownTimer)
//     document.querySelectorAll('#countdown').innerHTML = 'Completed'
//   } else {
//     seconds--
//   }
// }
// var countdownTimer = setInterval('timer()', 1000)
