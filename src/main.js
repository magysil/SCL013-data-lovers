import Pokemones from "./data/pokemon/pokemon.js";
import { allPokemon, orderPokemonAz, orderPokemonZa } from "./data.js";

const card = document.getElementById("contenidoTodos");

//Arreglo con todos los datos de Pokemones
const allData = allPokemon(Pokemones.pokemon);
const orderedDataAz = orderPokemonAz(allData);
const orderedDataZa = orderPokemonZa(allData);

//Muestra todos lo Pokemones en pantalla
function viewAllPokemon(dataSet) {
  let cardTemplate = "";
  for (let i = 0; i < dataSet.length; i++) {
    cardTemplate += `
                             <div class="elementos">
                             <div id='pokemon${dataSet[i].id}' class="card${dataSet[i].type[0]}">
                                <div class='itemsPoke'> 
                                    <h2>${dataSet[i].name}</h2>
                                    <h3>${dataSet[i].num}</h3>
                                    <img class="imgPokemon" src="${dataSet[i].img}"/>
                                    <h3>${dataSet[i].type[0]} </h3>
                                    </br> 
                                    </br> 
                                </div>
                            </div>
                            </div>`;
  }
  card.innerHTML = cardTemplate;
}
viewAllPokemon(allData);

//Ordenar pokemones A-Z / Z-A / Regresar a todos
const selectElement = document.querySelector(".ordenPoke");
selectElement.addEventListener("change", (e) => {
  const resultado = `${e.target.value}`;

  if (resultado === "A-Z") {
    viewAllPokemon(orderedDataAz);
  }
  if (resultado === "Z-A") {
    viewAllPokemon(orderedDataZa);
    
  } else if (resultado === "Todos") {
    viewAllPokemon(allData);
  }
});
