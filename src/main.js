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

//Ocultar Secciones
document.getElementById("filterOption").style.display = "none";
document.getElementById("viewCard").style.display = "none";
document.getElementById("search").style.display = "none";

//Ir Segunda pantalla
let capturar = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("viewCard").style.display = "";
  document.getElementById("search").style.display = "block";
  document.getElementById("filterOption").style.display = "";
};
document.getElementById("btnSecondPage").addEventListener("click", capturar); //mostrar segunda panrtalla
document.getElementById("pokedex").addEventListener("click", capturar); //mostrar segunda panrtalla

//Ir al Inicio
function homePage() {
  window.location.reload();
}
document.getElementById("home").addEventListener("click", homePage); //ir al inicio haciendo click en el logo
document.getElementById("link-home").addEventListener("click", homePage); //ir al inicio haciendo click en el menu

//Variables manejo de datos
const card = document.getElementById("viewCardCreate");
const allData = allPokemon(Pokemones.pokemon); // muestra todo la data
const orderedDataAz = orderPokemonAz(allData);
const orderedDataZa = orderPokemonZa(allData);
const orderedPokeDescendant = orderedDataDescendant(allData);

//Muestra todos lo Pokemones en pantalla
function viewAllPokemon(dataSet) {
  let cardTemplate = "";
  for (let i = 0; i < dataSet.length; i++) {
    cardTemplate += `
                             <div id="elementCard" class="elementCard">
                             <div id='pokemon${dataSet[i].id}' class="card ${
      dataSet[i].type[0]
    }">
                                <div id="itemsPoke" class='itemsPoke'> 
                                    <h2>${dataSet[i].name}</h2>
                                    <h3 id="numId">${dataSet[i].num}</h3>
                                    <img class="imgPokemon" src="${
                                      dataSet[i].img
                                    }"/>
                                    <h3>Tipo: ${dataSet[i].type.join(
                                      " - "
                                    )}</h3>
                                    </br>
                                    <h3>Debilidad: ${dataSet[i].weaknesses.join(
                                      " - "
                                    )} </h3>

                                </div>
                            </div>
                            </div>`;
  }
  card.innerHTML = cardTemplate;
  modal(dataSet);
}
viewAllPokemon(allData);

//console.log( allData);

//Ordenar pokemones A-Z / Z-A / 151-1/ Regresar a todos
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
  } else if (weaknessPoke === "Normal") {
    alert("Los pokemones no tienen debilidad a tipo normal");
  } else {
    let result = filterWeakness(allData, weaknessPoke);
    viewAllPokemon(result);
  }
});

//Buscar Pokemon por nombre
const input = document.getElementById("search");
input.addEventListener("keydown", function () {
  if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
    event.preventDefault();
    const name = input.value;
    const pokeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let chosenPoke = searchPoke(allData, pokeName);
    if(chosenPoke.length === 0){
      alert("No Hay Resultados de busqueda")
    }else
    viewAllPokemon(chosenPoke);
  }
});

// Mostrar cada pokemon con todas sus caracteristicas
function modal(e) {
  let principalContent = document.getElementById("principalModal");
  let cardcont = document.getElementById("cardContent");
  let itemsPoke = document.getElementsByClassName("elementCard");
  principalContent.style.display = "none";
  for (let i = 0; i < itemsPoke.length; i++) {
    let tarjeta = itemsPoke[i];
    tarjeta.addEventListener("click", () => {
      principalContent.style.display = "";
      document.getElementById("principalModal").style.display = "block";
      cardcont.innerHTML += `
  <section class="tarjetaPrincipal">
      <div class="x">
          <span class="close">&times;</span>
    </div>
    <div class="contenedor">
      <section class="izquierda">
          <div class="caracteristicaPrincipal">
              <p>${e[i].num}</p>
              <p>${e[i].name}</p>
              <img src="${e[i].img}">
              <p class="tipo">Tipo: </br>${e[i].type.join(" - ")}</p>
          </div>
      </section>
      <section class="derecha">
          <div class="caracteristicasSecundarias">
              <p>Altura: ${e[i].height}</p>
              <p>Peso: ${e[i].weight}</p>
              <p>Caramelos: ${e[i].candy} </p>
              <p>Cantidad Caramelos:${e[i].candy_count} </p>
          </div>
          <div class="debilidades">
              <p>Debilidad: ${e[i].weaknesses.join(" - ")}</p>
          </div>
      </section>
  </div>
  <section class="fondo">
      <div class="subFondo">
          <p> Pre Evolución: ${
            e[i].prev_evolution ? e[i].prev_evolution[0].num : "No tiene"
          }</p> 
          <p> Pre Evolución: ${
            e[i].prev_evolution ? e[i].prev_evolution[0].name : "No tiene"
          }</p> 
          <p> Evolución: ${
            e[i].next_evolution ? e[i].next_evolution[0].num : "No tiene"
          }</p> 
          <p> Evolución: ${
            e[i].next_evolution ? e[i].next_evolution[0].name : "No tiene"
          }</p>
      </div>

  </section>
</section>`;
      let span = document.getElementsByClassName("close")[0];
      span.addEventListener("click", () => {
        principalContent.style.display = "none";
        cardcont.innerHTML = "";
      });
      window.onclick = function (event) {
        if (event.target == principalContent) {
          principalContent.style.display = "none";
          cardcont.innerHTML = "";
        }
      };
    });
  }
}
