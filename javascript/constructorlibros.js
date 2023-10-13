const divLibros = document.getElementById("libros-argentina");
const inputNombre = document.getElementById("input-nombre");

divLibros.innerHTML=""

for (const libro of databaselibrosJSON) {

        const div = document.createElement("div");
        div.classList.add("libro");
      
        const imagen = document.createElement("img");
        imagen.src = libro.imagen;
      
        const titulo = document.createElement("p");
        titulo.textContent = libro.nombre;
      
        // Agrega la imagen y el título al div.
        libro.appendChild(imagen);
        libro.appendChild(titulo);
      
        // Agrega el div al contenedor.
        div.appendChild(div);
    
        
}
