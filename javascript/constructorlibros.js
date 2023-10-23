const divLibros = document.querySelector(".libros-argentina");
const inputLibros = document.querySelector("#input-nombre");

function crearLibros(lista) {
  // Supongamos que tienes un objeto JSON llamado databaselibrosJSON
for (var i = 0; i < lista.length; i++) {
  const div = document.createElement("div");
  div.classList.add("libro");
  
  const nombre = document.createElement("p");
  nombre.textContent = lista[i].nombre;
  nombre.classList.add("nombreDelLibro");
  
  const enlaceImagen = document.createElement("a"); // Crear un enlace
  enlaceImagen.href = lista[i].enlace; // Establecer la URL de destino
  enlaceImagen.target = "_blank"; // Abre el enlace en una nueva pestaña (opcional)

  const imagen = document.createElement("img");
  imagen.src = lista[i].imagen;
  imagen.classList.add("imagenDelLibro");

  enlaceImagen.appendChild(imagen); // Agregar la imagen al enlace

  div.appendChild(enlaceImagen); // Agregar el enlace que contiene la imagen
  div.appendChild(nombre);
  
  divLibros.appendChild(div);
}
  
}

crearLibros(databaselibrosJSON) 

function buscadorDeNombre() {
  const nombreLeido = inputLibros.value.toLowerCase(); // Convertir la búsqueda a minúsculas para una búsqueda sin distinción entre mayúsculas y minúsculas
  const divLibros = document.querySelector(".libros-argentina");
  divLibros.innerHTML = ""; // Limpiar resultados anteriores

  if (nombreLeido.trim() !== "") { // Verificar si el campo de búsqueda no está vacío
    const filtrados = databaselibrosJSON.filter(libro => libro.nombre.toLowerCase().includes(nombreLeido));
    crearLibros(filtrados);
  } else {
    crearLibros(databaselibrosJSON);
  }
}




