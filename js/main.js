// Archivo principal de JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web de La Parada del Sol cargado correctamente');
    
    // Inicializar componentes si los módulos no están disponibles
    if (typeof initSlider !== 'function') {
        console.warn('Módulo slider.js no encontrado');
    }
    
    // Nota: La navegación ahora se maneja completamente en nav.js
    
    // Inicializar AOS para animaciones (si está disponible)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
  const secciones = document.querySelectorAll('section');
  secciones.forEach(sec => sec.classList.add('seccion-animada'));

  function mostrarSeccionAnimada() {
    secciones.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', mostrarSeccionAnimada);
  mostrarSeccionAnimada();
});