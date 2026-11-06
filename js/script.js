// Jam & tanggal di sidebar
function tick() {
  var now = new Date();
  var c = document.getElementById('clock'), d = document.getElementById('date');
  if (c) c.textContent = now.toLocaleTimeString('id-ID');
  if (d) d.textContent = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
tick(); setInterval(tick, 1000);

// Penghitung kunjungan
var v = document.getElementById('visits');
if (v) {
  try {
    var n = (parseInt(localStorage.getItem('cb_visits'), 10) || 0) + 1;
    localStorage.setItem('cb_visits', n);
    v.textContent = n;
  } catch (e) {}
}

// 3. Tombol menu untuk HP
var toggle = document.getElementById('menuToggle'), menu = document.getElementById('menu');
toggle.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// 4. Form: tampilkan pesan sukses
document.querySelectorAll('form[data-form]').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = f.querySelector('.msg');
    msg.textContent = f.dataset.success.replace('{nama}', f.elements.nama.value);
    msg.hidden = false;
    f.reset();
  });
});
