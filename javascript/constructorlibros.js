const divLibros = document.querySelector(".libros-argentina");
const inputLibros = document.querySelector("#input-nombre");
const divLibrosOpenLibros = document.querySelector(".libros-open-libra");

function crearLibros(lista) {
  divLibros.innerHTML = ""; // Limpiar resultados anteriores

  for (var i = 0; i < lista.length; i++) {
    const div = document.createElement("div");
    div.classList.add("libro");

    const nombre = document.createElement("p");
    nombre.textContent = lista[i].nombre;
    nombre.classList.add("nombreDelLibro");

    const enlaceImagen = document.createElement("a");
    enlaceImagen.href = lista[i].enlace;
    enlaceImagen.target = "_blank";

    const imagen = document.createElement("img");
    imagen.src = lista[i].imagen;
    imagen.classList.add("imagenDelLibro");

    enlaceImagen.appendChild(imagen);
    div.appendChild(enlaceImagen);
    div.appendChild(nombre);

    divLibros.appendChild(div);
  }
}

crearLibros(databaselibrosJSON);

function buscadorDeNombre() {
  const nombreLeido = inputLibros.value.toLowerCase();
  divLibros.innerHTML = "";

  if (nombreLeido.trim() !== "") {
    const filtrados = databaselibrosJSON.filter(libro => libro.nombre.toLowerCase().includes(nombreLeido));
    crearLibros(filtrados);
  } else {
    crearLibros(databaselibrosJSON);
  }
}

async function crearLibrosOpenLibra() {
  try {
    const respuesta = await fetch("https://www.abibliadigital.com.br/api/verses/nvi/sl/23");
    const respuestaJSON = await respuesta.json();

    if (respuestaJSON.length > 0) {
      const nombresLibros = respuestaJSON.map(libro => libro.title);
      divLibrosOpenLibros.innerHTML = ""; // Limpiar resultados anteriores

      for (const nombreLibro of nombresLibros) {
        const nombre = document.createElement("p");
        nombre.textContent = nombreLibro;
        divLibrosOpenLibros.appendChild(nombre);
      }
    } else {
      divLibrosOpenLibros.innerHTML = "<p>No se encontraron biblias en.</p>";
    }
  } catch (error) {
    console.error("Error al obtener datos de OpenLibra:", error);
    divLibrosOpenLibros.innerHTML = "<p>Error al cargar datos biblias.</p>";
  }
}

crearLibrosOpenLibra();


