document.querySelectorAll('figure[data-url]').forEach(function (item) {
  item.addEventListener('click', function () {
    window.location.href = item.dataset.url;
  });
});

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  
  const clockElement = document.getElementById("clockWidget");
  if(clockElement) {
    clockElement.innerText = h + ":" + m + ":" + s + " WIB";
  }
}
setInterval(updateClock, 1000);
updateClock();
