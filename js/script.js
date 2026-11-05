// Klik kartu produk -> pindah ke website lain (di tab yang sama).
// Ganti tujuannya lewat atribut data-url di index.html.
document.querySelectorAll('figure[data-url]').forEach(function (item) {
  item.addEventListener('click', function () {
    window.location.href = item.dataset.url;
  });
});

// Fungsi untuk Widget Jam di Sidebar
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  // Tambahkan angka 0 di depan jika di bawah 10
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