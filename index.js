function padZero(number) {
  // number가 10보다 작으면 앞에 0을 추가하여 두 자릿수로 표시
  return (number < 10) ? '0' + number : number;
}

function x() {
  var now = new Date();
  var result =
  now.getFullYear() + ". "
      + padZero(now.getMonth() + 1) + ". "
      + padZero(now.getDate()) + ". "
      + padZero(now.getHours()) + ":"
      + padZero(now.getMinutes()) + ":"
      + padZero(now.getSeconds());
      clock.innerHTML = result;
}


window.onload = function(){
  // button=document.getElementById("btn");
  clock=document.getElementById("clock");
  setInterval(x, 1000);
}
