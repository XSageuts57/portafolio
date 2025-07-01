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
        rol: "Full Stack Developer",
        tecnologias: ["HTML", "CSS", "JS"],
        imagenes: ["img/motolavado.png", "img/motolavado1.png", "img/motolavado3.png", "img/motolavado4.png", "img/motolavado5.png", "img/motolavado6.png"]
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

    document.body.classList.remove('cerrando');
    document.body.classList.add('expandido');

    fondoOscuro.classList.add('activo');
    carruselExpandido.classList.add('activo');
    infoExpandida.classList.add('activo');

    mostrarImagen();
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
