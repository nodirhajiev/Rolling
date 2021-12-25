var countDownDate = new Date("Jan 31, 2022 00:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.querySelector("#countdown0").innerHTML =
    hours + ":" + minutes + ":" + seconds + " left";
  document.querySelector("#countdown1").innerHTML =
    hours + 1 + ":" + minutes + ":" + seconds + " left";
  document.querySelector("#countdown2").innerHTML =
    hours + 2 + ":" + minutes + ":" + seconds + " left";
  document.querySelector("#countdown3").innerHTML =
    hours + 3 + ":" + minutes + ":" + seconds + " left";
  
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#countdown").innerHTML = "EXPIRED";
  }
}, 1000);