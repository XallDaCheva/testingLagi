const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WLEEEE KAMU DI PRANK",
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err);
    return;
  }
  console.log("Koneksi database berhasil!");
});

// Endpoint untuk mendapatkan data
app.get("/data", (req, res) => {
  const query = "SELECT * FROM apa_ae";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Gagal mendapatkan data:", err);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
