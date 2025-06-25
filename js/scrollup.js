document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el botón
  const scrollTopBtn = document.getElementById('scroll-top');
  
  // Función para mostrar/ocultar el botón basado en la posición del scroll
  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }
  
  // Evento de scroll para mostrar/ocultar el botón
  window.addEventListener('scroll', toggleScrollButton);
  
  // Función para hacer scroll suave hacia arriba
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Verificar al cargar la página
  toggleScrollButton();
});