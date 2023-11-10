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
        console.log(posts);
        displayCharacters(posts);
        /*
        posts?.forEach((elementsObj:{})=>{
           // diccionary[elementsObj.name]=elementsObj.episode
        });
        
        for(let elements of posts){
            console.log(elements)
        }
        */
    });
}
function displayCharacters(characters) {
    if (characters == undefined)
        return;
    const container = document.getElementById('characterContainer');
    if (container) {
        for (let elements in characters) {
            container.innerHTML += `
            <div class="character-card">
            <h2>"${characters.id}"</h2>
            <h3>"${characters.nombre}"</h3>
            <p>${characters.edad}</p>
            <p>"${characters.estudiante}"</p>
            </div>
            `;
        }
    }
}
showPost();
