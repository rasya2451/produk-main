// Set weather effect (snow, rain, lightning)
function setWeather(effect) {
  // Panggil fungsi yang sesuai dengan cuaca yang dipilih
  switch (effect) {
    case 'snow':
      // Panggil fungsi untuk salju
      startSnowEffect();
      break;
    case 'rain':
      // Panggil fungsi untuk hujan
      startRainEffect();
      break;
    case 'lightning':
      // Panggil fungsi untuk petir
      startLightningEffect();
      break;
    default:
      break;
  }
}

// Contoh Fungsi untuk Salju (dapat ditambahkan lebih banyak efek cuaca)
function startSnowEffect() {
  console.log("Salju dimulai!");
  // Logika atau animasi untuk efek salju
}

function startRainEffect() {
  console.log("Hujan dimulai!");
  // Logika atau animasi untuk efek hujan
}

function startLightningEffect() {
  console.log("Petir dimulai!");
  // Logika atau animasi untuk efek petir
}
