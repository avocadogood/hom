var button;

window.onload = function(){
    // button=document.getElementById("btn");
    clock=document.getElementById("clock");
    setInterval(x, 1000);
}

function x() {
  var now = new Date();
  var result =
      now.getFullYear() + ". "
      + (now.getMonth() + 1) + ". "
      + now.getDate() + ". "
      + now.getHours() + ":"
      + now.getMinutes() + ":"
      + now.getSeconds();
  clock.innerHTML = result;
}

// button.addEventListener('mouseenter', function() {
//   button.classList.add('animated-button');
// });

// button.addEventListener('mouseleave', function() {
//   button.classList.remove('animated-button');
// });

