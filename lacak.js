function lacakNomor() {
  const input = document.getElementById("phoneInput").value.trim();
  const hasil = document.getElementById("hasil");
  
  // Deteksi negara dan operator
  const data = {
    "+62": { negara: "Indonesia", operator: "Telkomsel/Indosat/XL/Axis", lokasi: "Jakarta" },
    "+1": { negara: "Amerika Serikat", operator: "AT&T/T-Mobile", lokasi: "New York" },
    "+91": { negara: "India", operator: "Airtel/Jio", lokasi: "Delhi" }
    // bisa ditambah sendiri
  };

  const kode = input.startsWith("+") ? input.match(/^\+\d{1,3}/)[0] : null;

  if (!kode || !data[kode]) {
    hasil.innerHTML = "<p>Nomor tidak valid atau negara belum didukung.</p>";
    return;
  }

  const info = data[kode];
  const googleMaps = `https://www.google.com/maps?q=${encodeURIComponent(info.lokasi)}`;

  hasil.innerHTML = `
    <p><strong>Negara:</strong> ${info.negara}</p>
    <p><strong>Operator Umum:</strong> ${info.operator}</p>
    <p><strong>Perkiraan Lokasi:</strong> ${info.lokasi}</p>
    <iframe src="${googleMaps}&output=embed" width="100%" height="300" style="border:0;"></iframe>
  `;
}
