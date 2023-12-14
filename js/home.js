document.addEventListener('DOMContentLoaded', function() {
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

    const cardsStack = document.createElement('div');
    cardsStack.classList.add('cards-stack');

    cardsSection.appendChild(cardsStack);

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
});
