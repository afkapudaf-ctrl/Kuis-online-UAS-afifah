function hitungSkor() {
  let skor = 0;
  let totalSoal = 5;

  for (let i = 1; i <= totalSoal; i++) {
    let jawaban = document.querySelector(
      'input[name="q' + i + '"]:checked'
    );

    if (!jawaban) {
      alert("Semua soal wajib dijawab!");
      return;
    }

    skor += parseInt(jawaban.value);
  }

  let status = skor >= 70 ? "🎉 LULUS" : "❌ TIDAK LULUS";
  let hasil = document.getElementById("hasil");

  hasil.innerHTML = `
    Skor Akhir: ${skor} <br>
    Status: ${status}
  `;
}

function ulangKuis() {
  document.getElementById("quizForm").reset();
  document.getElementById("hasil").innerHTML = "";
}