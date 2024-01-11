import { fetchData } from "./utils.js";

export const renderOnePokemon = async (pokemonName) => {
  const onePoke = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
  const div = document.createElement('div');
  div.innerHTML = `
  <h1>${onePoke.name}</h1>
  <img src='${onePoke.sprites.other.home.front_default}'/>
  `
  document.querySelector('#app').append(div);
  console.log(onePoke);
}