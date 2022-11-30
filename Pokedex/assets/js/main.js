let pokemonsList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 12;
const typeColor = {
    normal: "a6a877",
    grass: "00a54e",
    fire: "ee7f30",
    water: "678fee",
    electric: "f7cf2e",
    ice: "98d5d7",
    ground: "dfbf69",
    flying: "a98ff0",
    poison: "a040a0",
    fighting: "bf3029",
    psychic: "f65687",
    dark: "725847",
    rock: "b8a137",
    bug: "a8b720",
    ghost: "6e5896",
    steel: "b9b7cf",
    dragon: "6f38f6",
    fairy: "f9aec7",
}
let pokemonState = [];

let offset = 0;
const maxResults = 898;
let inPagePokemons = [];

loadMoreButton.addEventListener("click", () => {
    offset += limit;
    loadPokemons(offset, limit);
})

loadPokemons(offset, limit);

//________________________________________________

function loadPokemons(offset, limit) {
    if (offset + limit > maxResults) {
        limit = maxResults - offset;
        loadMoreButton.parentElement.remove(loadMoreButton);
    }

    pokeApi.getPokemons(offset, limit)
        .then(data => {
            pokemonsList = document.getElementById("pokemonsList");
            inPagePokemons = [].concat(inPagePokemons, data);
            pokemonsList.innerHTML += data.map(convertPokemonHTML).join("")
            inPagePokemons.forEach(e => document.getElementById(e.number).addEventListener("click", openCard))
        });
}

function convertPokemonHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ul class="types">
                    ${pokemon.types.map(e => "<li class=\"type " + e + "\">" + e + "</li>").join("")}
                </ul>
                <img src=${pokemon.img} alt=${pokemon.name}>
            </div>
        </li>
    `
}

function openCard() {
    let pokemon = inPagePokemons.find(e => e.number == this.id);
    
    let pokemonsList = document.getElementById("pokemonsList");
    while(pokemonsList.firstChild) {
        pokemonState.push(pokemonsList.firstChild);
        pokemonsList.removeChild(pokemonsList.firstChild);
    }
    
    document.getElementById("contentPage").innerHTML += `
        <div class="card ${pokemon.type}" id="card"> 
            <div class="cardMain"> 
                <div class="cardButtons">
                    <button class="backButton" onClick="back()"><img src="https://img.icons8.com/ios-glyphs/30/null/circled-left-2.png"/></button> 
                    <button class="likeButton"><img src="https://img.icons8.com/ios-glyphs/30/000000/hearts.png"/></button> 
                </div>
                <span class="name">${pokemon.name}</span>
                <ul class="types">
                    ${pokemon.types.map(e => "<li class=\"type " + e + "\">" + e + "</li>").join("")}
                </ul>
                <img class="cardImg" src=${pokemon.img} alt=${pokemon.name} style="${getImgShadowEffect(pokemon.type)}">
            </div>
            <div class="cardDetail">
                
            </div>
        </div>
    `
}

function back(){
    let contentPage = document.getElementById("contentPage");
    contentPage.removeChild(document.getElementById("card"));
    
    pokemonsList = document.getElementById("pokemonsList");
    pokemonState.forEach(e => {if(e.nodeName == "LI") pokemonsList.appendChild(e)});
}

function getImgShadowEffect(pokemonType){

    let color = typeColor[pokemonType];

    color = parseInt(color, 16) + 2000;
    color = color.toString(16);
    
    return `-webkit-filter: drop-shadow(10px 10px 10px #bbdb88);
    filter: drop-shadow(10px 10px 10px #${color});`
}