function updateClock() {
    const clockElement = document.getElementById("saat");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateClock, 1000);
  updateClock();


    // Sekmeler için tıklama olayı
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
        const page = this.getAttribute("data-page");
        loadContent(page); // Dinamik içerik yükleme
      });
    });

    // İçerik yükleme fonksiyonu
    function loadContent(page) {
      const content = document.getElementById("content");
      
      // İçeriği dinamik olarak belirle
      switch (page) {
        case "Anasayfa":
          content.innerHTML = `
            <h1>Ana Sayfa</h1>
            <p>Hoşgeldiniz! Burası ana sayfa içeriği.</p>
          `;
          break;
        case "Projeler":
          content.innerHTML = `
            <h1>Projeler</h1>
            <p>Projelerimi burada bulabilirsiniz.</p>
          `;
          break;
        case "hakkimda":
          content.innerHTML = `
            <h1>Hakkımda</h1>
            <p>Ben Ahmet Usta, bu benim portfolyo sitem.</p>
          `;
          break;
        default:
          content.innerHTML = `
            <p>İçerik bulunamadı.</p>
          `;
      }
    }