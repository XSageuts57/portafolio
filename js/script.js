console.log("Sageuts Company - Portafolio funcionando correctamente.");

const fondoOscuro = document.getElementById('fondoOscuro');
const carruselExpandido = document.getElementById('carruselExpandido');
const infoExpandida = document.getElementById('infoExpandida');
const imagenCarrusel = document.getElementById('imagenCarrusel');

const tituloExpandido = document.querySelector('.info-expandida h3');
const descripcionExpandida = document.querySelector('.info-expandida p');
const rolExpandido = document.querySelector('.info-expandida .rol');

let indiceActual = 0;
let proyectoActual = 0;

// 🔥 Datos de los proyectos
const proyectos = [
    {
        titulo: "Gestor Legal de Citas",
        descripcion: "Plataforma para la gestión de citas legales, con backend robusto, frontend intuitivo y administración de usuarios, abogados y clientes.",
        rol: "Full Stack Developer",
        tecnologias: ["AWS", "Spring", "Java", "HTML", "CSS", "JS", "MySQL Workbench"],
        imagenes: ["img/abogado2.jfif", "img/abogado.jfif", "img/abogado1.jfif", "img/abogado3.jfif", "img/abogado4.jfif"]
    },
    {
        titulo: "Hotel Belmond",
        descripcion: "Sistema completo para reservas de habitaciones con backend robusto, frontend moderno y una interfaz amigable para la gestión hotelera.",
        rol: "Full Stack Developer",
        tecnologias: ["AWS", "Spring", "Java", "HTML", "CSS", "JS", "MySQL Workbench"],
        imagenes: ["img/hotel1.jfif", "img/hotel2.jfif", "img/hotel3.jfif", "img/hotel4.jfif", "img/hotel5.jfif", "img/hotel6.jfif", "img/hotel7.jfif", "img/hotel8.jfif", "img/hotel9.jfif"]
    },
    {
        titulo: "Librería Light",
        descripcion: "Proyecto de librería minimalista enfocada solo en la parte visual, moderna, limpia, completamente responsive y elegante.",
        rol: "Frontend Developer",
        tecnologias: ["HTML", "CSS", "JS"],
        imagenes: ["img/libreria.jfif", "img/libreria2.jfif"]
    },
    {
        titulo: "Recetario Gourmet",
        descripcion: "Aplicación para gestión de recetas con categorías, buscador, modo oscuro y una experiencia enfocada en la cocina.",
        rol: "Full Stack Developer",
        tecnologias: ["Spring", "Java", "HTML", "CSS", "JS", "MySQL"],
        imagenes: ["img/recetas11.jfif", "img/recetas1.jfif", "img/recetas2.jfif", "img/recetas3.jfif", "img/recetas4.jfif", "img/recetas5.jfif", "img/recetas6.jfif", "img/recetas7.jfif", "img/recetas8.jfif", "img/recetas9.jfif", "img/recetas10.jfif", "img/recetas11.jfif"]
    },
    {
        titulo: "Motolavado ZonaBiker",
        descripcion: "Sistema web para la gestión de citas, servicios y administración de un motolavado, con un diseño moderno y eficiente.",
        rol: "Frontend Developer",
        tecnologias: ["HTML", "CSS", "JS"],
        imagenes: ["img/motolovado.png", "img/motolavado1.png", "img/motolavado2.png", "img/motolavado3.png", "img/motolavado4.png", "img/motolavado5.png", "img/motolavado6.png", "img/motolavado7.png", "img/motolavado8.png", "img/motolavado9.png"]
    },
        {
        titulo: "Gestión Integral para Motolavado ZonaBiker",
        descripcion: "Plataforma web desarrollada para optimizar la administración del motolavado ZonaBiker. Permite controlar ingresos, gastos, citas y servicios, con una interfaz moderna, ágil y adaptable a cualquier dispositivo.",
        rol: "Full Stack Developer",
        tecnologias: ["HTML", "CSS", "JS", "MySQL", "Node"],
        imagenes: ["img/frombiker.png", "img/frombiker1.png", "img/frombiker2.png", "img/frombiker3.png", "img/frombiker4.png", "img/frombiker5.png", "img/frombiker6.png", "img/frombiker7.png", "img/frombiker8.png"]
    },
        {
        titulo: "Sweet & Roll - Ecommerce de Repostería",
        descripcion: "Sitio web para promocionar y vender rollos de canela y otros productos de repostería. Diseño responsivo, experiencia de usuario cuidada y enfoque en la conversión.",
        rol: "Frontend Developer",
        tecnologias: ["HTML", "CSS", "JS"],
        imagenes: ["img/rolls.png", "img/rolls1.png", "img/rolls2.png", "img/rolls3.png", "img/rolls4.png", "img/rolls5.png", "img/rolls6.png", "img/rolls7.png", "img/rolls8.png"]
    }
    
];

function mostrarImagen() {
    imagenCarrusel.src = proyectos[proyectoActual].imagenes[indiceActual];
}

function transicionarImagen() {
    imagenCarrusel.classList.add('fade');

    setTimeout(() => {
        mostrarImagen();
        requestAnimationFrame(() => {
            imagenCarrusel.classList.remove('fade');
        });
    }, 400);
}

function siguienteImagen() {
    const total = proyectos[proyectoActual].imagenes.length;
    indiceActual = (indiceActual + 1) % total;
    transicionarImagen();
}

function anteriorImagen() {
    const total = proyectos[proyectoActual].imagenes.length;
    indiceActual = (indiceActual - 1 + total) % total;
    transicionarImagen();
}

const tecnologiasContenedor = document.getElementById('tecnologiasUsadas')


function expandirProyecto(index) {
    proyectoActual = index;
    indiceActual = 0;

    const proyecto = proyectos[index];

    // ✅ Agregar clase específica para Sweet & Roll
    document.body.classList.remove('proyecto-sweet-roll');
    if (index === 6) {
        document.body.classList.add('proyecto-sweet-roll');
        document.body.setAttribute('data-proyecto', 'sweet-roll');
    } else {
        document.body.removeAttribute('data-proyecto');
    }

    // ✅ Actualizar textos dinámicamente
    tituloExpandido.textContent = proyecto.titulo;
    descripcionExpandida.textContent = proyecto.descripcion;
    rolExpandido.textContent = proyecto.rol;

    // ✅ Mostrar tecnologías
    tecnologiasContenedor.innerHTML = "";
    proyecto.tecnologias.forEach(tec => {
        const span = document.createElement("span");
        span.textContent = tec;
        tecnologiasContenedor.appendChild(span);
    });

    imagenCarrusel.classList.remove('fade');
    imagenCarrusel.classList.remove('vista-completa'); // 🔥 Reset vista completa
    imagenCarrusel.style.cursor = 'zoom-in'; // 🔥 Cursor indicador

    document.body.classList.remove('cerrando');
    document.body.classList.add('expandido');

    fondoOscuro.classList.add('activo');
    carruselExpandido.classList.add('activo');
    infoExpandida.classList.add('activo');

    mostrarImagen();
    
    // 🔥 Configurar clic en imagen después de abrir modal
    setTimeout(configurarClicEnImagen, 100);
}

function cerrarProyecto() {
    document.body.classList.add('cerrando-linea');

    setTimeout(() => {
        document.body.classList.add('cerrando-texto');
    }, 500);

    setTimeout(() => {
        document.body.classList.add('cerrando-imagen');
        tecnologiasContenedor.innerHTML = "";
    }, 1000);

    setTimeout(() => {
        document.body.classList.remove('expandido', 'cerrando-linea', 'cerrando-texto', 'cerrando-imagen');

        fondoOscuro.classList.remove('activo');
        carruselExpandido.classList.remove('activo');
        infoExpandida.classList.remove('activo');

         
    }, 1600);
}
// Funciones para el modal de cotización
function abrirFormularioCotizacion() {
    const modal = document.getElementById('modalCotizacion');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Forzar reflow para asegurar la animación
    void modal.offsetWidth;
    
    // Activar animación de entrada
    modal.classList.add('active');
}

function cerrarModal() {
    const modal = document.getElementById('modalCotizacion');
    
    // Activar animación de salida
    modal.classList.add('closing');
    modal.classList.remove('active');
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        document.body.style.overflow = 'auto';
    }, 400);
}

// Reemplaza tu función enviarCotizacion() actual con esta versión corregida:

function enviarCotizacion() {
    const form = document.getElementById('formCotizacion');
    const formData = new FormData(form);
    
    // Validar formulario
    if (!form.checkValidity()) {
        form.reportValidity();
        
        const invalidFields = form.querySelectorAll(':invalid');
        invalidFields.forEach(field => {
            field.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                field.style.animation = '';
            }, 500);
        });
        return;
    }
    
    // Recopilar datos del formulario
    const datos = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        empresa: formData.get('empresa'),
        telefono: formData.get('telefono'),
        tipoProyecto: formData.get('tipoProyecto'),
        presupuesto: formData.get('presupuesto'),
        plazo: formData.get('plazo'),
        descripcion: formData.get('descripcion'),
        fecha: new Date().toLocaleString('es-PE')
    };
    
    // Mostrar loading
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Enviando...';
    submitBtn.disabled = true;
    
    // Parámetros para EmailJS
    const templateParams = {
        from_name: datos.nombre,
        from_email: datos.email,
        empresa: datos.empresa || 'No especificado',
        telefono: datos.telefono || 'No especificado',
        tipo_proyecto: getTipoProyectoTexto(datos.tipoProyecto),
        presupuesto: getPresupuestoTexto(datos.presupuesto),
        plazo: getPlazoTexto(datos.plazo),
        descripcion: datos.descripcion,
        fecha: datos.fecha,
        to_email: 'amayobenjamin16@gmail.com'
    };
    
    // Enviar con EmailJS
    emailjs.send(
        'sageuts', // Reemplaza con tu Service ID de EmailJS
        'template_2lqrq9f', // Reemplaza con tu Template ID de EmailJS
        templateParams
    ).then(function(response) {
        console.log('✅ Correo enviado!', response.status, response.text);
        
        // Mostrar mensaje de éxito
        mostrarToast('✅ Cotización enviada correctamente');
        
        // Cerrar modal y limpiar formulario
        setTimeout(() => {
            cerrarModal();
            form.reset();
        }, 2000);
        
    }).catch(function(error) {
        console.error('❌ Error enviando correo:', error);
        
        // Mostrar mensaje de error
        mostrarToast('❌ Error al enviar. Por favor, intente nuevamente.');
        
        // También ofrecer opción de mailto como fallback
        setTimeout(() => {
            if (confirm('No se pudo enviar automáticamente. ¿Desea abrir su cliente de email para enviar manualmente?')) {
                enviarCotizacionFallback(datos);
            }
        }, 1000);
        
    }).finally(function() {
        // Restaurar botón
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

// Función fallback con mailto
function enviarCotizacionFallback(datos) {
    const asunto = `📋 Cotización - ${datos.empresa || datos.nombre} - ${getTipoProyectoTexto(datos.tipoProyecto)}`;
    
    const cuerpo = `
¡Hola Sageuts Company!

Me interesa solicitar una cotización para el siguiente proyecto:

**INFORMACIÓN DE CONTACTO:**
👤 Nombre: ${datos.nombre}
📧 Email: ${datos.email}
🏢 Empresa/Proyecto: ${datos.empresa || 'No especificado'}
📱 Teléfono: ${datos.telefono || 'No especificado'}

**DETALLES DEL PROYECTO:**
🎯 Tipo de Proyecto: ${getTipoProyectoTexto(datos.tipoProyecto)}
💰 Presupuesto Aproximado: ${getPresupuestoTexto(datos.presupuesto)}
⏰ Plazo Deseado: ${getPlazoTexto(datos.plazo)}

**DESCRIPCIÓN DEL PROYECTO:**
${datos.descripcion}

---
Este mensaje fue enviado desde el formulario de cotización de Sageuts Company
🌐 https://sageutscompany.com
    `.trim();
    
    const mailtoLink = `mailto:amayobenjamin16@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoLink;
    
    cerrarModal();
}

// Función para mostrar toast (mejorada)
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${mensaje.includes('✅') ? '#10B981' : '#EF4444'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10001;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 4000);
}
// Funciones auxiliares para obtener textos
function getTipoProyectoTexto(valor) {
    const tipos = {
        'pagina-web': 'Página Web Profesional',
        'automatizacion': 'Automatización WhatsApp',
        'proyecto-academico': 'Proyecto Académico',
        'tarjeta-digital': 'Tarjeta Digital con QR',
        'hosting': 'Hosting + Dominio',
        'otro': 'Otro tipo de proyecto'
    };
    return tipos[valor] || valor;
}

function getPresupuestoTexto(valor) {
    const presupuestos = {
        '500-1000': 'S/ 500 - S/ 1,000',
        '1000-2000': 'S/ 1,000 - S/ 2,000',
        '2000-5000': 'S/ 2,000 - S/ 5,000',
        '5000+': 'Más de S/ 5,000',
        'no-definido': 'Por definir'
    };
    return presupuestos[valor] || 'No especificado';
}

function getPlazoTexto(valor) {
    const plazos = {
        'urgente': 'Urgente (1-2 semanas)',
        'normal': 'Normal (3-4 semanas)',
        'flexible': 'Flexible (1-2 meses)'
    };
    return plazos[valor] || 'No especificado';
}

// Función para mostrar toast de confirmación
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-green);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10001;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modalCotizacion');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('modalCotizacion');
        if (modal.style.display === 'block') {
            cerrarModal();
        }
    }
});

// Agregar animación de shake al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 🔥 Función para hacer clic en la imagen y abrir en vista completa
function configurarClicEnImagen() {
    const imagenCarrusel = document.getElementById('imagenCarrusel');
    
    imagenCarrusel.addEventListener('click', function() {
        // Alternar entre modo normal y vista completa
        if (this.classList.contains('vista-completa')) {
            // Salir de vista completa
            this.classList.remove('vista-completa');
            this.style.cursor = 'zoom-in';
            // Restaurar carrusel
            carruselExpandido.style.transform = 'translate(-50%, -50%) scale(0.9)';
            carruselExpandido.style.zIndex = '10000';
        } else {
            // Entrar en vista completa
            this.classList.add('vista-completa');
            this.style.cursor = 'zoom-out';
            // Expandir carrusel
            carruselExpandido.style.transform = 'translate(-50%, -50%) scale(1)';
            carruselExpandido.style.zIndex = '10010';
        }
    });
}

// 🔥 También hacer que el fondo oscuro cierre la vista completa
fondoOscuro.addEventListener('click', function(event) {
    if (event.target === fondoOscuro) {
        const imagen = document.getElementById('imagenCarrusel');
        if (imagen.classList.contains('vista-completa')) {
            imagen.classList.remove('vista-completa');
            imagen.style.cursor = 'zoom-in';
            carruselExpandido.style.transform = 'translate(-50%, -50%) scale(0.9)';
            carruselExpandido.style.zIndex = '10000';
        }
    }
});