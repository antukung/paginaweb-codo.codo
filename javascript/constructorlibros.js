const divLibros = document.querySelector(".libros-argentina");



for (var i = 0; i < databaselibrosJSON.length; i++) {
  const div = document.createElement("div");
  div.classList.add("libro");
  
  
  const nombre = document.createElement("p");
  nombre.textContent = databaselibrosJSON[i].nombre;
  nombre.classList.add("nombreDelLibro");
  
  
  const imagen = document.createElement("img");
  imagen.src = databaselibrosJSON[i].imagen;
  imagen.classList.add("imagenDelLibro");
  
  div.appendChild(nombre);
  div.appendChild(imagen);
  
  divLibros.appendChild(div);
}