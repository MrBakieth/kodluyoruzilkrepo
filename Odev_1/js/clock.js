let username = prompt("Adınızı giriniz: ");

if (username) {
  document.getElementById("myName").textContent = username;
  showTime();
  setInterval(showTime, 1000);
}

function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("myClock").textContent = timeString;
}
