document.addEventListener('DOMContentLoaded', function () {
  // Datos de los kioscos
  const kioscos = {
    villa: {
      nombre: "La Parada del Sol 1",
      direccion: "Av. Rodríguez Peña 4706, Villa Lynch",
      coords: [-34.5925783, -58.5343913],
      comoLlegar: "https://www.google.com/maps/place/La+Parada+Del+Sol/@-34.5980488,-58.5500529,16z/data=!4m20!1m13!4m12!1m4!2m2!1d-58.5549896!2d-34.6037847!4e1!1m6!1m2!1s0x95bcb7979fd24047:0xaa9264461f782a34!2sLa+Parada+Del+Sol,+Avenida+Rodr%C3%ADguez+Pe%C3%B1a,+Villa+Lynch,+Provincia+de+Buenos+Aires!2m2!1d-58.5343913!2d-34.5925783!3m5!1s0x95bcb7979fd24047:0xaa9264461f782a34!8m2!3d-34.5925783!4d-58.5343913!16s%2Fg%2F11hbv9d2b4?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    santos: {
      nombre: "La Parada del Sol 2",
      direccion: "Santiago Bonifacini 3795, Santos Lugares",
      coords: [-34.6000701, -58.5479934],
      comoLlegar: "https://www.google.com/maps/dir/-34.6037847,-58.5549896/La+parada+del+sol+2,+Santiago+Bonifacini+3795,+B1676+Santos+Lugares,+Provincia+de+Buenos+Aires/@-34.6015776,-58.55427,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bcb72ef7db9051:0xdd8247c6c2993d5e!2m2!1d-58.5479934!2d-34.6000701?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    caseros: {
      nombre: "La Parada del Sol 3",
      direccion: "Dr. Amadeo Sabattini 4251, Caseros",
      coords: [-34.6024612, -58.5551552],
      comoLlegar: "https://www.google.com/maps/dir/-34.6037847,-58.5549896/La+Parada+Del+Sol+3+Kiosco+24+hs,+Dr.+Amadeo+Sabattini+4251,+B1676BAI+Caseros,+1675+Santos+Lugares,+Provincia+de+Buenos+Aires/@-34.6031185,-58.5576473,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95bcb9aaee09fac9:0x3b494a6a98261f25!2m2!1d-58.5551552!2d-34.6024612?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  };

  // Inicializar mapa Leaflet
  const map = L.map('mapa-leaflet').setView(kioscos.villa.coords, 16);

  // Capa base OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Marcadores
  const marcadores = {};
  for (const key in kioscos) {
    const marker = L.marker(kioscos[key].coords)
      .bindPopup(`<strong>${kioscos[key].nombre}</strong><br>${kioscos[key].direccion}`);
    marker.addTo(map);
    marcadores[key] = marker;
  }

  // Tabs
  const tabs = document.querySelectorAll('.mapa-tab');
  const btnComoLlegar = document.getElementById('mapa-como-llegar');

  function enfocarKiosco(key) {
    map.setView(kioscos[key].coords, 16);
    marcadores[key].openPopup();
    btnComoLlegar.href = kioscos[key].comoLlegar;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      enfocarKiosco(this.getAttribute('data-lugar'));
    });
  });

  // Enfocar el primero al cargar
  enfocarKiosco('villa');
});