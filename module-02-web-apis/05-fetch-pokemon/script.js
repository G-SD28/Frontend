const pokemonContainer = document.getElementById('pokemon-container');

// Eine Funktion, die Daten holt
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return response.json(); // konvertiert response (JSON) in ein JS-Objekt {}
  })
  .then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      displayPokemon(pokemon);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Funktion, die DOM manipuliert
function displayPokemon(pokemon) {
  //   console.log(pokemon.name);
  const pokemonListItem = document.createElement('li');
  pokemonListItem.textContent = pokemon.name;

  pokemonContainer.append(pokemonListItem);
}
