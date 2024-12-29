// Función para mostrar el catálogo
function mostrarCatalogo() {
    document.getElementById("titulo-principal").textContent = "Catálogo";
    document.getElementById("contenedor-productos").style.display = "grid";  // Mostrar productos
    document.getElementById("nosotros-seccion").style.display = "none";  // Ocultar sección Nosotros
}

// Mostrar la sección "Nosotros"
document.getElementById("nosotros").addEventListener("click", function() {
    document.getElementById("titulo-principal").textContent = "Sobre Nosotros";
    document.getElementById("contenedor-productos").style.display = "none";  // Ocultar productos
    document.getElementById("nosotros-seccion").style.display = "block";  // Mostrar sección Nosotros
});

// Manejadores para las demás categorías
document.getElementById("todos").addEventListener("click", mostrarCatalogo);
document.getElementById("abrigos").addEventListener("click", mostrarCatalogo);
document.getElementById("camisetas").addEventListener("click", mostrarCatalogo);
document.getElementById("pantalones").addEventListener("click", mostrarCatalogo);

// Asegurar que inicie con el catálogo visible y "Nosotros" oculto
document.addEventListener("DOMContentLoaded", function() {
    mostrarCatalogo();
});