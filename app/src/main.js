import './style.css';
import { fetchData } from './utils/utils.js';
import { renderOnePokemon } from './utils/render.js';

const onePoke = await fetchData('https://pokeapi.co/api/v2/pokemon/ditto');

const handleSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const dataObj = Object.fromEntries(formData);

  console.log(dataObj.pokemonName);
  renderOnePokemon(dataObj.pokemonName);
}

const main = async () => {
  console.log('working')

  console.log(onePoke);
  console.log(onePoke.name);
  console.log(onePoke.sprites);

  renderOnePokemon('ditto')

  document.querySelector('form').addEventListener('submit', handleSubmit);
};

main();
