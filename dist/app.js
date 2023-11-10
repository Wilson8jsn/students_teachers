"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://rickandmortyapi.com/api/character';
const container = document.getElementById('characters-container');
function fetchCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error('No se pudo obtener la información de los personajes');
            }
            const data = yield response.json();
            console.log('API Response:', data);
            if (data.results && Array.isArray(data.results)) {
                displayCharacters(data.results);
            }
            else {
                console.error('La estructura de datos desde la API es inesperada:', data);
            }
        }
        catch (error) {
            console.error('Error al obtener los personajes:', error);
        }
    });
}
function displayCharacters(characters) {
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
