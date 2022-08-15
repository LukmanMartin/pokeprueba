const URL = "https://pokeapi.co/api/v2/pokemon/";
let ListaPokemon = []

window.onload = () => {
init();
}

const init = async () => {
const pokemons = await getPokemons();
mappedPokemon(pokemons);
}


const getPokemons = async () => {
    
    
    for(index=1; index<151; index++) {
        const pokemonApi = await fetch (`${URL}${index}`);
        
        const convertoJson = await pokemonApi.json();
        ListaPokemon.push(convertoJson);
    }
    
}

const mappedPokemon = () => {
    ListaPokemon.map((pokemon) => {
        
        return printPokemon ({
            nombre: pokemon.name, 
            imagen: pokemon.sprites.other.dream_world.front_default, 
            tipos:  getTypes (pokemon.types),
            num : pokemon.id
        });
})}


const getTypes =(types) => {
    const typesNames =[];
    types.forEach((element => {
        typesNames.push(element.type.name);
    }));
    return typesNames;
}
const printPokemon = (pokemon) => {
    console.log(pokemon)
        let pokemonContainer = document.querySelector('#pokemonContainer')
        pokemonContainer.innerHTML += `
        
        
        <div class="tarjetas">
    <div class="tarjeta">
      <div class="${pokemon.tipos[0]} frontal">
        <div class="contenido">
        <span><img src="${pokemon.imagen}" alt="${pokemon.nombre}"/></span>
        </div>
      </div>
      <div class="${pokemon.tipos[0]} tracero">
        <div class="contenido">
        <h3>${pokemon.nombre}</h3>
        <p>${pokemon.num}<p> 
        <p>${pokemon.tipos.join(`  `)} </p>
          
        </div>
      </div>
    </div>
</div>

            
        
        
            
            
       
        ` 
}

