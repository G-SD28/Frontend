const pokemonContainer = document.getElementById('pokemon-container');

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) // template literal
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .then((data) => {
      // fals Daten `null` oder `undefined` oder `""`, aber HTTP Status Code 200 ok
      if (!data) {
        return;
      }
      // console.log(data);
      displayPokemon(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Funktion, die DOM manipuliert
function displayPokemon(pokemon) {
  //   console.log(pokemon.name);
  const pokemonCard = document.createElement('div');

  pokemonCard.classList.add(
    'border-2',
    'border-solid',
    'rounded-xl',
    'text-center',
    'pb-5',
    'px-4',
  );

  const pokemonImg = document.createElement('img');

  pokemonImg.src = pokemon.sprites.other['official-artwork'].front_default;
  const pokemonName = document.createElement('h2');
  // pokemonName.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  pokemonName.setAttribute('class', 'font-bold text-xl text-gray-600');

  pokemonCard.append(pokemonImg, pokemonName);
  pokemonContainer.append(pokemonCard);
}
