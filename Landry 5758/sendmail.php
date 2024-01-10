<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ini.vladimire@gmail.com"; // Ganti dengan alamat email tujuan
    $subject = "Pesan dari $name";
    $headers = "From: $email";

    // Kirim email
    mail($to, $subject, $message, $headers);

    // Beri tanggapan ke klien
    echo "Pesan berhasil dikirim!";
}
