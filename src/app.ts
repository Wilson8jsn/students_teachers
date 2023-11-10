const fetchURL = 'http://localhost:8081/assistant'




const postData = {
    nombre: "TESTS",
    edad: 20,
    estudiante: true
  }
const requestOptions: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
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

interface persona {
    id: number; 
    nombre: string; 
    edad: number; 
    estudiante:boolean;
} 

interface persona extends Array<persona>{}


async function fetchPosts(url: string) {
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error('La respuesta no fue bien recibida')
        }
        return (await response.json() as persona);
    }catch(error){
        console.log('Peticion Incorrecta Probablemente')
    }
}

async function showPost() {
    let posts:persona|undefined=await fetchPosts(fetchURL);
    displayCharacters(posts);
}

function displayCharacters(characters:persona|undefined):void{
    if(characters == undefined) return
    console.log(characters.id);
    const container = document.getElementById('characterContainer');
    if(container){
        for(let elements of characters){
            container.innerHTML +=`
            <div class="character-card">
            <h2> ID: "${elements.id}"</h2>
            <h3> Nombres: "${elements.nombre}"</h3>
            <p> Edad: "${elements.edad}"</p>
            <p> Esta Estudiando:"${elements.estudiante===true?"Si":"No"}"</p>
            </div>
            `;
        }
    }
    
}

showPost();