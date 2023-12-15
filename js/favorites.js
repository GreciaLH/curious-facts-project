// Crear elementos
const sectionLogoFavorites = document.createElement('section');
const h2Favorites = document.createElement('h2');
const img = document.createElement('img');
const asideFavorites = document.createElement('aside');
const sectionButtonsFavorites = document.createElement('section');
const buttonHome = document.createElement('button');

// Establecer atributos y contenido
sectionLogoFavorites.id = 'logo-favorites';
h2Favorites.classList.add('Favorite');
h2Favorites.textContent = 'FAVOURITES';
img.src = './assets/img/little_owl.png';
img.alt = 'owl';

asideFavorites.id = 'cards-Favorites';

sectionButtonsFavorites.id = 'buttons-favorites';
buttonHome.classList.add('Home');
buttonHome.textContent = 'HOME';

// Construir la estructura
sectionLogoFavorites.appendChild(h2Favorites);
sectionLogoFavorites.appendChild(img);

// Agregar al DOM (asumiendo que hay un elemento 'body' existente)
document.body.appendChild(sectionLogoFavorites);
document.body.appendChild(asideFavorites);
document.body.appendChild(sectionButtonsFavorites);
sectionButtonsFavorites.appendChild(buttonHome);
