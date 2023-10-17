const divLibros = document.querySelector(".libros-argentina");


// Supongamos que tienes un objeto JSON llamado databaselibrosJSON
for (var i = 0; i < databaselibrosJSON.length; i++) {
  const div = document.createElement("div");
  div.classList.add("libro");
  
  const nombre = document.createElement("p");
  nombre.textContent = databaselibrosJSON[i].nombre;
  nombre.classList.add("nombreDelLibro");
  
  const enlaceImagen = document.createElement("a"); // Crear un enlace
  enlaceImagen.href = databaselibrosJSON[i].enlace; // Establecer la URL de destino
  enlaceImagen.target = "_blank"; // Abre el enlace en una nueva pestaña (opcional)

  const imagen = document.createElement("img");
  imagen.src = databaselibrosJSON[i].imagen;
  imagen.classList.add("imagenDelLibro");

  enlaceImagen.appendChild(imagen); // Agregar la imagen al enlace

  div.appendChild(enlaceImagen); // Agregar el enlace que contiene la imagen
  div.appendChild(nombre);
  
  divLibros.appendChild(div);
}
