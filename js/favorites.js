// Creo todos los elementos necesarios
const mainSection = document.createElement("section");
const sectionLogoFavorites = document.createElement("section");
const h2Favorites = document.createElement("h2");
const imgFavorites = document.createElement("img");
const asideFavorites = document.createElement("aside");
const sectionButtonsFavorites = document.createElement("section");
const buttonHomeFavorites = document.createElement("button");
const scrollToTopButton = document.createElement("button");
const arrowIcon = document.createElement("i");
const titleButtonFav = document.createElement("div");

// Identificadores // Establecemos atributos y contenido
mainSection.id = "contentSection";
sectionLogoFavorites.id = "logo-favorites";
h2Favorites.classList.add("Favorite");
h2Favorites.textContent = "FAVORITES";
imgFavorites.src = "./assets/img/bohologo.png";
imgFavorites.alt = "owl";
asideFavorites.id = "cards-Favorites";
sectionButtonsFavorites.id = "buttons-favorites";
buttonHomeFavorites.classList.add("Home");
buttonHomeFavorites.textContent = "HOME";
titleButtonFav.id = "titleButtonFavorites";

// Construimos la estrutura
sectionLogoFavorites.appendChild(h2Favorites);

// Agregamos al DOM
mainSection.appendChild(titleButtonFav);
titleButtonFav.appendChild(sectionLogoFavorites);
titleButtonFav.appendChild(sectionButtonsFavorites);
titleButtonFav.appendChild(imgFavorites);
mainSection.appendChild(asideFavorites);

sectionButtonsFavorites.appendChild(buttonHomeFavorites);

// Reemplazamos el contenido actual con la página de favoritos
const currentContent = document.getElementById("content");
currentContent.replaceWith(mainSection);

const buttonHomeFavoritesAfterReplace =
    document.getElementById("buttons-favorites");

buttonHomeFavoritesAfterReplace.addEventListener("click", function () {
    console.log("Botón Home clicado");
    window.location.href = "./index.html";
});

// // Agregamos estilos directamente a la sección para el fondo rojo
// asideFavorites.style.backgroundColor = 'red';

function getFavoritePhrases() {
    return JSON.parse(localStorage.getItem("favoritePhrases")) || [];
}

function savePhrasesFavorites(frases) {
    localStorage.setItem("favoritePhrases", JSON.stringify(frases));
}

function showFfavoritePhrases() {
    asideFavorites.innerHTML = "";

    const favoritePhrases = getFavoritePhrases();
    // Verificar si hay frases favoritas para mostrar
    if (favoritePhrases.length > 0) {
        favoritePhrases.forEach(function (frase, index) {
            // Crear un elemento para mostrar cada frase favorita
            const quoteElement = document.createElement("div");
            quoteElement.classList.add('card-generated');

            // Crear un elemento para mostrar la frase
            const quoteText = document.createElement("span");
            quoteText.textContent = frase;
            quoteElement.appendChild(quoteText);
            // Crear un botón para eliminar la frase favorita
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.innerHTML = '<i class="fas fa-heart"></i>';
            deleteButton.addEventListener("click", function () {
                // Eliminar la frase favorita y actualizar la interfaz
                favoritePhrases.splice(index, 1);
                savePhrasesFavorites(favoritePhrases);
                showFfavoritePhrases();
            });
            quoteElement.appendChild(deleteButton);
            // Agregar el elemento al contenedor asideFavorites
            asideFavorites.appendChild(quoteElement);
        });
    } else {
        // Mostrar un mensaje si no hay frases favoritas
        const mensajeElement = document.createElement("p");
        mensajeElement.textContent = "No hay frases favoritas.";
        asideFavorites.appendChild(mensajeElement);
    }
}
showFfavoritePhrases();

// Boton para volver al principio de la pagina
const svgImagePath = "./assets/img/vector.svg";
const svgImage = document.createElement("img");
svgImage.src = svgImagePath;
scrollToTopButton.appendChild(svgImage);
scrollToTopButton.id = "scrollToTopButton";
mainSection.appendChild(scrollToTopButton);
/*document.body.appendChild(scrollToTopButton);*/

// Función para desplazarse suavemente hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// Agregar un evento de clic al botón
scrollToTopButton.addEventListener("click", scrollToTop);
// Mostrar u ocultar el botón según la posición de desplazamiento
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
