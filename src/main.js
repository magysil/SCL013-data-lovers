import Pokemones from "./data/pokemon/pokemon.js";
import {
  allPokemon,
  orderPokemonAz,
  orderPokemonZa,
  filterType,
  orderedDataDescendant,
  filterWeakness,
  searchPoke,
} from "./data.js";

document.getElementById("filterOption").style.display= "none";
document.getElementById("viewCard").style.display="none";
document.getElementById("search").style.display="none";


let capturar = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("filterOption").style.display = "";
  document.getElementById("viewCard").style.display = "";
  document.getElementById("search").style.display="";
};
document.getElementById("btnSecondPage").addEventListener("click", capturar);

const card = document.getElementById("viewCardCreate");

//Arreglo con todos los datos de Pokemones
const allData = allPokemon(Pokemones.pokemon);
const orderedDataAz = orderPokemonAz(allData);
const orderedDataZa = orderPokemonZa(allData);
const orderedPokeDescendant = orderedDataDescendant(allData);
//Muestra todos lo Pokemones en pantalla
function viewAllPokemon(dataSet) {
  let cardTemplate = "";
  for (let i = 0; i < dataSet.length; i++) {
    cardTemplate += `
                             <div class="elementCard">
                             <div id='pokemon${dataSet[i].id}' class="card${
      dataSet[i].type[0]
    }">
                                <div class='itemsPoke'> 
                                    <h2>${dataSet[i].name}</h2>
                                    <h3>${dataSet[i].num}</h3>
                                    <img class="imgPokemon" src="${
                                      dataSet[i].img
                                    }"/>
                                    <h3>Tipo: ${dataSet[i].type.join(
                                      " - "
                                    )}</h3>
                                    </br>
                                    <h3>Debilidad: ${dataSet[i].weaknesses.join(" - ")} </h3>
                                </div>
                            </div>
                            </div>`;
  }
  card.innerHTML = cardTemplate;
}

viewAllPokemon(allData);
//console.log( allData);

//Ordenar pokemones A-Z / Z-A / Regresar a todos
const selectElement = document.querySelector(".ordenPoke");
selectElement.addEventListener("change", (e) => {
  const resultado = `${e.target.value}`;
  //console.log(resultado);
  if (resultado === "A-Z") {
    viewAllPokemon(orderedDataAz);
  }
  if (resultado === "Z-A") {
    viewAllPokemon(orderedDataZa);
  }
  if (resultado === "151-1") {
    viewAllPokemon(orderedPokeDescendant);
  } else if (resultado === "All") {
    viewAllPokemon(allData);
  }
});

//Filtrar Pokemones por Tipo
const selectType = document.querySelector(".typePoke");
selectType.addEventListener("change", () => {
  let typePoke = selectType.value;
  if (typePoke === "allType") {
    viewAllPokemon(allData);
  } else {
    let result = filterType(allData, typePoke);
    viewAllPokemon(result);
  }
});

//Filtrar Pokemones por Debilidad
const selectWeakness = document.querySelector(".weakness");
selectWeakness.addEventListener("change", () => {
  let weaknessPoke = selectWeakness.value;
  if (weaknessPoke === "Weakness") {
    viewAllPokemon(allData);
  }
  else if (weaknessPoke === "Normal") {
    alert("Los pokemones no tienen debilidad a tipo normal");
  } else {
    let result = filterWeakness(allData, weaknessPoke);
    viewAllPokemon(result);
  }
});

//Buscar Pokemon por nombre 
const input = document.getElementById("search");
input.addEventListener("keydown", function() {
  if(event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
    event.preventDefault();
    //card.innerHTML = "";
    const name = input.value;
    const pokeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let chosenPoke = searchPoke(allData,pokeName);
    //console.log(chosenPoke);
    viewAllPokemon(chosenPoke);
    
  } 
});