
    // Creo todos los elementos necesarios
    const mainElement = document.createElement('main');
    const sectionLogoFavorites = document.createElement('section');
    const h2Favorites = document.createElement('h2');
    const imgFavorites = document.createElement('img');
    const asideFavorites = document.createElement('aside');
    const sectionButtonsFavorites = document.createElement('section');
    const buttonHomeFavorites = document.createElement('button');

    // Establecemos atributos y contenido
    mainElement.id = 'content';
    sectionLogoFavorites.id = 'logo-favorites';
    h2Favorites.classList.add('Favorite');
    h2Favorites.textContent = 'FAVOURITES';
    imgFavorites.src = './assets/img/little_owl.png';
    imgFavorites.alt = 'owl';

    asideFavorites.id = 'cards-Favorites';

    sectionButtonsFavorites.id = 'buttons-favorites';
    buttonHomeFavorites.classList.add('Home');
    buttonHomeFavorites.textContent = 'HOME';

    // Connstruimos la estrutura
    sectionLogoFavorites.appendChild(h2Favorites);
    sectionLogoFavorites.appendChild(imgFavorites);

    // Agregamos al DOM
    mainElement.appendChild(sectionLogoFavorites);
    mainElement.appendChild(asideFavorites);
    mainElement.appendChild(sectionButtonsFavorites);
    sectionButtonsFavorites.appendChild(buttonHomeFavorites);

    // Reemplazamos el contenido actual con la página de favoritos
    const currentContent = document.getElementById('content');
    currentContent.replaceWith(mainElement);


