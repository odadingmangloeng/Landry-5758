 // Navbar Function
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//toogle
function toggleMenu() {
  const menuBar = document.querySelector(".menuToggle");
  const nav = document.querySelector("header .nav");
  menuBar.classList.toggle('active');
  nav.classList.toggle('active');
}


// Pesan email
function sendMessage() { 
  // Ambil nilai dari setiap input
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Buat objek XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Atur metode, URL, dan apakah asinkron atau tidak
  xhr.open("POST", "sendmail.php", true);

  // Set header untuk mengindikasikan bahwa ini adalah permintaan AJAX
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Tangani perubahan status permintaan
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Tanggapan dari server (misalnya, pesan sukses)
      alert(xhr.responseText);
    }
  };

  // Kirim data formulir ke server
  xhr.send("name=" + name + "&email=" + email + "&message=" + message);
}
