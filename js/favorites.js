  // Creo todos los elementos necesarios
    const mainElement = document.createElement('main');
    const sectionLogoFavorites = document.createElement('section');
    const h2Favorites = document.createElement('h2');
    const imgFavorites = document.createElement('img');
    const asideFavorites = document.createElement('aside');
    const sectionButtonsFavorites = document.createElement('section');
    const buttonHomeFavorites = document.createElement('button');
    const returnButton = document.createElement('button');
    const arrowIcon = document.createElement('i')

    // Identificadores // Establecemos atributos y contenido
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
    returnButton.id = 'return-button';

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


    const buttonHomeFavoritesAfterReplace = document.getElementById('buttons-favorites');

        buttonHomeFavoritesAfterReplace.addEventListener('click', function () {
            console.log('Botón Home clicado');
            window.location.href = './index.html';
        });

// // Agregamos estilos directamente a la sección para el fondo rojo
// asideFavorites.style.backgroundColor = 'red';

function getFavoritePhrases() {
        return JSON.parse(localStorage.getItem('favoritePhrases')) || [];
    }

    function savePhrasesFavorites(frases) {
        localStorage.setItem('favoritePhrases', JSON.stringify(frases));
    }

    function showFfavoritePhrases() {
        asideFavorites.innerHTML = '';

        const favoritePhrases = getFavoritePhrases();
        // Verificar si hay frases favoritas para mostrar
        if (favoritePhrases.length > 0) {
            favoritePhrases.forEach(function (frase, index) {
                // Crear un elemento para mostrar cada frase favorita
                const quoteElement = document.createElement('div');
                // Crear un elemento para mostrar la frase
                const quoteText = document.createElement('span');
                quoteText.textContent = frase;
                quoteElement.appendChild(quoteText);
                // Crear un botón para eliminar la frase favorita
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.innerHTML = '<i class="fas fa-heart"></i>';
                deleteButton.addEventListener('click', function () {
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
            const mensajeElement = document.createElement('p');
            mensajeElement.textContent = 'No hay frases favoritas.';
            asideFavorites.appendChild(mensajeElement);
        }
    }

    showFfavoritePhrases();

    arrowIcon.classList.add('fas', 'fa-arrow-left');
    returnButton.appendChild(arrowIcon);
    returnButton.addEventListener('click', function () {
      window.location.href = './index.html';;
    });
    document.body.appendChild(returnButton);