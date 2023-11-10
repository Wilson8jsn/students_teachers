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
const fetchURL = 'http://localhost:8081/persona';
// Interface describing the shape of our json data
const postData = {
    nombre: "TESTS",
    edad: 20,
    estudiante: true
};
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Ajusta según el tipo de datos que estás enviando
    },
    body: JSON.stringify(postData),
};
fetch(fetchURL, requestOptions)
    .then(response => {
    if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }
    return response.json();
})
    .then(data => {
    console.log('Respuesta exitosa:', data);
})
    .catch(error => {
    console.error('Error:', error);
});
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(url);
            if (!response.ok) {
                throw new Error('La respuesta no fue bien recibida');
            }
            return yield response.json();
        }
        catch (error) {
            console.log('Peticion Incorrecta Probablemente');
        }
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        displayCharacters(posts);
    });
}
function displayCharacters(characters) {
    if (characters == undefined)
        return;
    console.log(characters.id);
    const container = document.getElementById('characterContainer');
    if (container) {
        for (let elements of characters) {
            container.innerHTML += `
            <div class="character-card">
            <h2> ID: "${elements.id}"</h2>
            <h3> Nombres: "${elements.nombre}"</h3>
            <p> Edad: "${elements.edad}"</p>
            <p> Esta Estudiando:"${elements.estudiante === true ? "Si" : "No"}"</p>
            </div>
            `;
        }
    }
}
showPost();
