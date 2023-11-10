interface Character {
    name: string;
    img: string;
    species: string;
}

const url = 'https://rickandmortyapi.com/api/character';

const container = document.getElementById('characters-container');

async function fetchCharacters() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de los personajes');
        }

        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.results && Array.isArray(data.results)) {
            displayCharacters(data.results);
        } else {
            console.error('La estructura de datos desde la API es inesperada:', data);
        }
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}


function displayCharacters(characters: Character[]) {
    if (container) {
        container.innerHTML = '';
        characters.forEach(character => {
            console.log('Imagen URL:', character.img);
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
            <img src="${character.img}" alt="${character.name}" onerror="this.onerror=null; this.src='imágenes/default-image.jpg';">

             <h2>${character.name}</h2>
             <p>${character.species}</p>
            `;
            
            container.appendChild(characterCard);
            
        });
    }
}

fetchCharacters();
