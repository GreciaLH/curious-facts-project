document.addEventListener('DOMContentLoaded', async function () {
    const content = document.getElementById('content');

    // Crear sección para el logo
    const logoSection = document.createElement('section');
    logoSection.id = 'section-logo';

    const logoImg = document.createElement('img');
    logoImg.src = './assets/img/little_owl.png';
    logoImg.alt = 'owl';

    logoSection.appendChild(logoImg);

    // Crear sección para las cartas
    const cardsSection = document.createElement('section');
    cardsSection.id = 'cards-section';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    // Contenedor para la flecha izquierda
    const leftArrowContainer = document.createElement('div');
    leftArrowContainer.classList.add('arrow-container');

    const leftButton = document.createElement('button');
    leftButton.classList.add('left-button');
    leftButton.innerHTML = '&#9664;'; // Botón izquierdo (flecha hacia la izquierda)

    leftArrowContainer.appendChild(leftButton);

    // Contenedor para la frase
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');

    cardContainer.appendChild(leftArrowContainer);
    cardContainer.appendChild(quoteContainer);

    // Contenedor para la flecha derecha
    const rightArrowContainer = document.createElement('div');
    rightArrowContainer.classList.add('arrow-container');

    const rightButton = document.createElement('button');
    rightButton.classList.add('right-button');
    rightButton.innerHTML = '&#9654;'; // Botón derecho (flecha hacia la derecha)

    rightArrowContainer.appendChild(rightButton);

    cardContainer.appendChild(rightArrowContainer);

    cardsSection.appendChild(cardContainer);

    // Crear sección para los botones
    const buttonsSection = document.createElement('section');
    buttonsSection.id = 'buttons-section';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-button');
    nextButton.textContent = 'NEXT';

    const favoritesButton = document.createElement('button');
    favoritesButton.classList.add('favorites-button');
    favoritesButton.textContent = 'FAVORITES';

    buttonsSection.appendChild(nextButton);
    buttonsSection.appendChild(favoritesButton);

    // Agregar las secciones al main
    content.appendChild(logoSection);
    content.appendChild(cardsSection);
    content.appendChild(buttonsSection);

    // URL de la API (reemplaza 'URL_DE_TU_API' por la dirección real de la API)
    const apiUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

    // Función para obtener la frase del día de la API
    async function fetchQuoteOfTheDay() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            return data.text; // Devuelve la frase del día obtenida de la API
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Función para mostrar la frase del día en el contenedor
    async function displayQuoteOfTheDay() {
        const quote = await fetchQuoteOfTheDay();

        if (quote) {
            quoteContainer.textContent = quote;

            leftButton.addEventListener('click', async function () {
                const newQuote = await fetchQuoteOfTheDay();
                quoteContainer.textContent = newQuote;
            });

            rightButton.addEventListener('click', async function () {
                const newQuote = await fetchQuoteOfTheDay();
                quoteContainer.textContent = newQuote;
            });
        }
    }

    // Mostrar la frase del día cuando se cargue la página
    await displayQuoteOfTheDay();
});

