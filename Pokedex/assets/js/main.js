const pokemonsList = document.getElementById("pokemonsList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 12;
let offset = 0;
const maxResults = 898;
let inPagePokemons = [];

loadMoreButton.addEventListener("click", () => {
    offset += limit;
    loadPokemons(offset, limit);
})

loadPokemons(offset, limit);

//________________________________________________

function loadPokemons(offset, limit){
    if(offset+limit > maxResults) {
        limit = maxResults - offset;
        loadMoreButton.parentElement.remove(loadMoreButton);
    }

    pokeApi.getPokemons(offset, limit)
    .then(data => {
        inPagePokemons = [].concat(inPagePokemons,data);
        pokemonsList.innerHTML += data.map(convertPokemonHTML).join("")
        data.forEach(e => document.getElementById(e.number).addEventListener("click", openCard))
    });
}

function convertPokemonHTML(pokemon){
    return `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ul class="types">
                    ${pokemon.types.map(e => "<li class=\"type " + e +"\">" + e + "</li>").join("")}
                </ul>
                <img src=${pokemon.img} alt=${pokemon.name}>
            </div>
        </li>
    `
}

function openCard(){
    let pokemon = inPagePokemons.find(e => e.number == this.id);
    
    document.getElementById("contentPage").innerHTML += `
        <div class="card cardPosition ${pokemon.type}"> 
            <div class="cardMain"> 
                <div class="cardButtons">
                    <button class="backButton"><img src="https://img.icons8.com/ios-glyphs/30/null/circled-left-2.png"/></button> 
                    <button class="likeButton"><img src="https://img.icons8.com/ios-glyphs/30/000000/hearts.png"/></button> 
                </div>
                <span class="name">${pokemon.name}</span>
                <ul class="types">
                    ${pokemon.types.map(e => "<li class=\"type " + e +"\">" + e + "</li>").join("")}
                </ul>
                <img class="cardImg" src=${pokemon.img} alt=${pokemon.name}>
            </div>
            <div class="cardDetail">
                
            </div>
        </div>
    `
}