//Trae todos lo registros de la data
export const allPokemon = (dataSet) => {
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    newDataArray.push(dataSet[i]);
  }
  return newDataArray;
};

//Ordena Pokemones por nombre de la A a la Z
export const orderPokemonAz = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return newDataArray;
};

//Ordena Pokemones por nombre de la Z a la A
export const orderPokemonZa = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i ++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return newDataArray;
};


//Ordena Pokemones por de manera descendiente 151 al 1
/* export const orderPokemonDescendant = (dataSet)=>{
  const newDataArray = [];
  for (let i = 0; i < dataSet.length; i ++) {
    newDataArray.push(dataSet[i]);
  }
  newDataArray.sort((a, b) => a.num-b.num {
     if (a.num > b.num) {
      return - 1;
     } 
     if (a.name < b.name) {
      return 1;
    }
    return 0;
     
   })
  return newDataArray;

}; */
