// home.js

// Importa la función fetchQuoteOfTheDay desde index.js
import { fetchQuoteOfTheDay } from './index.js';

document.addEventListener("DOMContentLoaded", async function () {
    const content = document.getElementById("content");

    // Sección del logo sin tarjeta, solo la imagen
    const logoSection = document.createElement("section");
    logoSection.id = "section-logo";

    const logoImg = document.createElement("img");
    logoImg.src = "./assets/img/little_owl.png";
    logoImg.alt = "owl";

    logoSection.appendChild(logoImg);

    const cardsSection = document.createElement("section");
    cardsSection.id = "cards-section";

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add("quote-container");

    const quoteContent = document.createElement("div");
    quoteContent.classList.add("quote-content");

    function adjustFontSize() {
        const lineHeight = parseFloat(
            window.getComputedStyle(quoteContent).lineHeight
        );
        const maxHeight = lineHeight * 12;
        if (quoteContent.clientHeight > maxHeight) {
            quoteContent.style.fontSize = "1em";
        } else {
            quoteContent.style.fontSize = "1.5em";
        }
    }

    quoteContainer.appendChild(quoteContent);

    const favoritesIcon = document.createElement("i");
    favoritesIcon.classList.add("fas", "fa-heart");

    const favoritesIconContainer = document.createElement("div");
    favoritesIconContainer.classList.add("favorites-icon-container");

    favoritesIcon.addEventListener("click", function () {
        const fraseActual = quoteContent.textContent.trim();
        if (!fraseActual) {
            showSweetAlert("There is no phrase to add to favorites", "info");
            return;
        }
        let favoritePhrases =
            JSON.parse(localStorage.getItem("favoritePhrases")) || [];
        if (favoritePhrases.includes(fraseActual)) {
            showSweetAlert("The phrase is already in the favorites list.", "info");
            return;
        }
        if (favoritePhrases.length >= 6) {
            showSweetAlert(
                "You have now reached the maximum limit of 6 favorite phrases!",
                "info"
            );
            return;
        }
        favoritePhrases.push(fraseActual);
        localStorage.setItem("favoritePhrases", JSON.stringify(favoritePhrases));
        const event = new Event("favoritePhrasesUpdated");
        document.dispatchEvent(event);
        showSweetAlert("phrase added to favorites.", "success");
    });

    function showSweetAlert(message, iconType) {
        let icon;

        if (iconType === "success") {
            icon = "success";
        } else {
            icon = "info";
        }
        Swal.fire({
            text: message,
            icon: icon,
            confirmButtonText: "Cerrar",
            customClass: {
                title: "custom-title-class",
            },
        });
    }

    favoritesIconContainer.appendChild(favoritesIcon);

    quoteContainer.appendChild(favoritesIconContainer);

    cardContainer.appendChild(quoteContainer);

    cardsSection.appendChild(cardContainer);

    const buttonsSection = document.createElement("section");
    buttonsSection.id = "buttons-section";

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-button");
    nextButton.textContent = "NEXT>";

    const favoritesButton = document.createElement("button");
    favoritesButton.classList.add("favorites-button");
    favoritesButton.textContent = "FAVORITES>";

    buttonsSection.appendChild(nextButton);
    buttonsSection.appendChild(favoritesButton);
    favoritesButton.addEventListener("click", function () {
        const mainElement = document.getElementById("content");
        mainElement.innerHTML = "";

        const script = document.createElement("script");
        script.src = "./js/favorites.js";

        document.head.appendChild(script);
    });

    content.appendChild(logoSection);
    content.appendChild(cardsSection);
    content.appendChild(buttonsSection);

    // Llamada a la API en la función fetchQuoteOfTheDay
    // Modificar la función displayQuoteOfTheDay
    async function displayQuoteOfTheDay() {
        quoteContent.classList.add('changing');
        quoteContainer.classList.add('animate-card');
        
        // Esperar a que la animación de desvanecimiento termine
        setTimeout(async () => {
            const quote = await fetchQuoteOfTheDay();
            if (quote) {
                quoteContent.textContent = quote;
            }
            
            // Quitar la clase después de que se complete la animación
            setTimeout(() => {
                quoteContent.classList.remove('changing');
                quoteContainer.classList.remove('animate-card');
            }, 400);
            
            adjustFontSize();
        }, 400);
    }

    await displayQuoteOfTheDay();
    adjustFontSize();

    nextButton.addEventListener("click", async function () {
        await displayQuoteOfTheDay();
        adjustFontSize();
    });
});
