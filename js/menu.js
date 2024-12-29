const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const botonContacto = document.getElementById("contacto");
    const botonNosotros = document.getElementById("nosotros");
    const contenedorPrincipal = document.querySelector("main");
    const contenedorProductos = document.getElementById("contenedor-productos");
    const nosotrosSeccion = document.getElementById("nosotros-seccion");
    const tituloPrincipal = document.getElementById("titulo-principal");

    // Plantilla de la sección de contacto
    const plantillaContacto = `
        <section id="contacto-seccion">
            <h2 class="nsh2">Contacto</h2>
            <p class="nsp">¿Tienes alguna pregunta o deseas más información sobre nuestros productos? No dudes en contactarnos a través del siguiente formulario o nuestras redes sociales.</p>
            
            <form id="formulario-contacto" class="formulario-contacto">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
        
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" placeholder="Tu correo electrónico" required>
        
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
        
                <button type="submit" class="boton-enviar">Enviar Mensaje</button>
            </form>
        
            <div class="contacto-enlaces">
                <p>O contáctanos directamente a través de:</p>
                <a href="https://wa.me/1234567890" target="_blank" class="enlace-contacto">
                    <i class="bi bi-whatsapp"></i> WhatsApp
                </a>
                <a href="https://facebook.com/importadoranesah" target="_blank" class="enlace-contacto">
                    <i class="bi bi-facebook"></i> Facebook
                </a>
            </div>
        </section>

        <style>
        .contacto-enlaces{
            margin-top: 10px;
    }
        </style>
    `;

    // Función para mostrar una sección específica
    function mostrarSeccion(seccion) {
        // Ocultar secciones existentes
        contenedorProductos.style.display = "none";
        nosotrosSeccion.style.display = "none";
        tituloPrincipal.style.display = "none";

        // Eliminar la sección de contacto si ya existe
        const contactoPrevio = document.getElementById("contacto-seccion");
        if (contactoPrevio) contactoPrevio.remove();

        // Mostrar la sección solicitada
        if (seccion === "contacto") {
            contenedorPrincipal.insertAdjacentHTML("beforeend", plantillaContacto);
        } else if (seccion === "nosotros") {
            nosotrosSeccion.style.display = "block";
        }
    }

    // Eventos de los botones
    botonNosotros.addEventListener("click", () => {
        mostrarSeccion("nosotros");
    });

    botonContacto.addEventListener("click", () => {
        mostrarSeccion("contacto");
    });
});
