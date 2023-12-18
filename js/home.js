
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

    // Contenedor para la frase y el icono de favoritos
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');

    // Contenedor para la frase obtenida de la API
    const quoteContent = document.createElement('div');
    quoteContent.classList.add('quote-content');

    function adjustFontSize() {
        const lineHeight = parseFloat(window.getComputedStyle(quoteContent).lineHeight);
        const maxHeight = lineHeight * 12; // Altura máxima para 12 líneas

        if (quoteContent.clientHeight > maxHeight) {
            quoteContent.style.fontSize = '1em'; // Cambiar el tamaño de la fuente a 1em o el valor que desees
        } else {
            quoteContent.style.fontSize = '1.5em'; // Restablecer el tamaño de la fuente predeterminado
        }
    }

    quoteContainer.appendChild(quoteContent);

    // Crear un span para el ícono de favoritos
    const favoritesIcon = document.createElement('i');
    favoritesIcon.classList.add('fas', 'fa-heart'); // Ajusta las clases según tus necesidades

    // Contenedor para el ícono de favoritos
    const favoritesIconContainer = document.createElement('div');
    favoritesIconContainer.classList.add('favorites-icon-container'); // Clase para el div contenedor

    // Establecer el ícono de favoritos como un botón
    favoritesIcon.addEventListener('click', function () {
        const fraseActual = quoteContent.textContent.trim();
    
        if (!fraseActual) {
            alert('No hay una frase para agregar a favoritos.');
            return;
        }
    
        let favoritePhrases = JSON.parse(localStorage.getItem('favoritePhrases')) || [];
    
        if (favoritePhrases.includes(fraseActual)) {
            alert('La frase ya está en la lista de favoritos.');
            return;
        }
    
        if (favoritePhrases.length >= 6) {
            alert('¡Ya has alcanzado el límite máximo de 6 frases favoritas!');
            return;
        }
    
        favoritePhrases.push(fraseActual);
        localStorage.setItem('favoritePhrases', JSON.stringify(favoritePhrases));
    
        const event = new Event('favoritePhrasesUpdated');
        document.dispatchEvent(event);
    
        alert('Frase agregada a favoritos:', fraseActual);
    });
    
    
  

    // Agregar el ícono de favoritos al contenedor del ícono
    favoritesIconContainer.appendChild(favoritesIcon);

    // Agregar el contenedor del ícono al contenedor de la cita
    quoteContainer.appendChild(favoritesIconContainer);

    // Agregar el contenedor de la cita al contenedor de la tarjeta
    cardContainer.appendChild(quoteContainer);

    cardsSection.appendChild(cardContainer);

    // Crear sección para los botones
    
    const buttonsSection = document.createElement('section');
    buttonsSection.id = 'buttons-section';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-button');
    nextButton.textContent = 'NEXT>';

    const favoritesButton = document.createElement('button');
    favoritesButton.classList.add('favorites-button');
    favoritesButton.textContent = 'FAVORITES>';

    buttonsSection.appendChild(nextButton);
    buttonsSection.appendChild(favoritesButton);
    favoritesButton.addEventListener('click', function () {
        // Eliminar el contenido existente de main
        const mainElement = document.getElementById('content');
        mainElement.innerHTML = '';
    
        // Crear un nuevo script para cargar y ejecutar favorites.js dinámicamente
        const script = document.createElement('script');
        script.src = './js/favorites.js';
    
        // Agregar el script al head
        document.head.appendChild(script);
    });

    // Agregar las secciones al main
    content.appendChild(logoSection);
    content.appendChild(cardsSection);
    content.appendChild(buttonsSection);

    // llamada a la API
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
            quoteContent.textContent = quote;
        }
    }
    // Mostrar la frase del día cuando se cargue la página
    await displayQuoteOfTheDay();
    adjustFontSize()

    // Función para cambiar la frase al hacer clic en el botón NEXT
    nextButton.addEventListener('click', async function () {
        await displayQuoteOfTheDay();
        adjustFontSize();
    });
    
    
});
