(function () {
  const input = document.getElementById("pokemon-name");
  const form = document.getElementById("pokemon-search");
  const container = document.getElementById("pokemon-container");

  // separation of concerns (SOLID)
  function displayPokemon(pokemonImg) {
    const box = document.createElement("article"); // <article>
    const img = document.createElement("img"); // <img>

    img.src = pokemonImg;

    box.appendChild(img); // <article><img src="" /></article>
    container.appendChild(box); // <section id=""><article><img src="" /></article></section>
  }

  function fetchPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      method: "GET",
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .catch(console.error);
  }

  const onPokemonSearchSubmit = async (e) => {
    e.preventDefault();
    const pokemonName = input.value;

    console.log("Pokemon", pokemonName); // logging

    try {
      const pokemon = await fetchPokemon(pokemonName);
      displayPokemon(pokemon.sprites.front_default);
    } catch (err) {
      console.error(err);
    }
  };

  form.addEventListener("submit", onPokemonSearchSubmit);
})();
