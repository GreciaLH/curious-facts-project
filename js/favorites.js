
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


sectionLogoFavorites.appendChild(h2Favorites);


mainSection.appendChild(titleButtonFav);
titleButtonFav.appendChild(sectionLogoFavorites);
titleButtonFav.appendChild(sectionButtonsFavorites);
titleButtonFav.appendChild(imgFavorites);
mainSection.appendChild(asideFavorites);

sectionButtonsFavorites.appendChild(buttonHomeFavorites);


const currentContent = document.getElementById("content");
currentContent.replaceWith(mainSection);

const buttonHomeFavoritesAfterReplace =
    document.getElementById("buttons-favorites");

buttonHomeFavoritesAfterReplace.addEventListener("click", function () {
    console.log("Botón Home clicado");
    window.location.href = "./index.html";
});



function getFavoritePhrases() {
    return JSON.parse(localStorage.getItem("favoritePhrases")) || [];
}

function savePhrasesFavorites(frases) {
    localStorage.setItem("favoritePhrases", JSON.stringify(frases));
}

function showFfavoritePhrases() {
    asideFavorites.innerHTML = "";

    const favoritePhrases = getFavoritePhrases();

    if (favoritePhrases.length > 0) {
        favoritePhrases.forEach(function (frase, index) {

            const quoteElement = document.createElement("div");
            quoteElement.classList.add('card-generated');


            const quoteText = document.createElement("span");
            quoteText.textContent = frase;
            quoteElement.appendChild(quoteText);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.innerHTML = '<i class="fas fa-heart"></i>';
            deleteButton.addEventListener("click", function () {

                favoritePhrases.splice(index, 1);
                savePhrasesFavorites(favoritePhrases);
                showFfavoritePhrases();
            });
            quoteElement.appendChild(deleteButton);

            asideFavorites.appendChild(quoteElement);
        });
    } else {

        const mensajeElement = document.createElement("p");
        mensajeElement.textContent = "No hay frases favoritas.";
        asideFavorites.appendChild(mensajeElement);
    }
}
showFfavoritePhrases();


const svgImagePath = "./assets/img/vector.svg";
const svgImage = document.createElement("img");
svgImage.src = svgImagePath;
scrollToTopButton.appendChild(svgImage);
scrollToTopButton.id = "scrollToTopButton";
mainSection.appendChild(scrollToTopButton);


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

scrollToTopButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});
