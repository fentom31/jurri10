console.log("¡Script cargado correctamente!");
const API_KEY = "9bc46c3d";

const botonBuscar = document.getElementById("botonBuscar");
const inputTitulo = document.getElementById("tituloPelicula");
const divResultado = document.getElementById("resultado");

botonBuscar.addEventListener("click", () => {
    const titulo = inputTitulo.value.trim();

    if (titulo === "") {
        divResultado.textContent = "Por favor, escribe un título.";
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(titulo)}`;

    fetch(url)
        .then(response => response.json())
        .then(datos => {
            if (datos.Response === "False") {
                divResultado.textContent = "No se ha encontrado esa película.";
                return;
            }

            divResultado.innerHTML = `
                <p><strong>Director:</strong> ${datos.Director}</p>
                <p><strong>Año:</strong> ${datos.Year}</p>
            `;
        })
        .catch(error => {
            console.error("Error al llamar a la API:", error);
            divResultado.textContent = "Ha ocurrido un error al buscar la película.";
        });
});