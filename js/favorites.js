
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


    const buttonHomeFavoritesAfterReplace = document.getElementById('buttons-favorites');

        buttonHomeFavoritesAfterReplace.addEventListener('click', function () {
            console.log('Botón Home clicado');
            window.location.href = './index.html';
        });

// Agregamos estilos directamente a la sección para el fondo rojo
asideFavorites.style.backgroundColor = 'red';

function obtenerFrasesFavoritas() {
        return JSON.parse(localStorage.getItem('frasesFavoritas')) || [];
    }

    // Función para guardar las frases favoritas en localStorage
    function guardarFrasesFavoritas(frases) {
        localStorage.setItem('frasesFavoritas', JSON.stringify(frases));
    }

    // Función para mostrar las frases favoritas en la interfaz de usuario
    function mostrarFrasesFavoritas() {
        // Limpiar el contenido actual de asideFavorites
        asideFavorites.innerHTML = '';

        // Obtener las frases favoritas desde localStorage
        const frasesFavoritas = obtenerFrasesFavoritas();

        // Verificar si hay frases favoritas para mostrar
        if (frasesFavoritas.length > 0) {
            frasesFavoritas.forEach(function (frase, index) {
                // Crear un elemento para mostrar cada frase favorita
                const fraseElement = document.createElement('div');

                // Crear un elemento para mostrar la frase
                const fraseText = document.createElement('span');
                fraseText.textContent = frase;
                fraseElement.appendChild(fraseText);

                // Crear un botón para eliminar la frase favorita
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.addEventListener('click', function () {
                    // Eliminar la frase favorita y actualizar la interfaz
                    frasesFavoritas.splice(index, 1);
                    guardarFrasesFavoritas(frasesFavoritas);
                    mostrarFrasesFavoritas();
                });

                fraseElement.appendChild(deleteButton);

                // Agregar el elemento al contenedor asideFavorites
                asideFavorites.appendChild(fraseElement);
            });
        } else {
            // Mostrar un mensaje si no hay frases favoritas
            const mensajeElement = document.createElement('p');
            mensajeElement.textContent = 'No hay frases favoritas.';
            asideFavorites.appendChild(mensajeElement);
        }
    }

    // Llamar a la función para mostrar las frases favoritas al cargar la página
    mostrarFrasesFavoritas();