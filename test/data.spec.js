
import { allPokemon, orderPokemonAz, orderPokemonZa,orderedDataDescendant, filterType, filterWeakness} from "../src/data.js";

const arrayAll = [
  {
    num:"001",
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Fire",
    weaknesses: "Water"
  },

  {
    num:"002",
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    type: "Ice",
    weaknesses:"Fire",
  },

  {
    num:"003",
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Water",
    weaknesses:"Ice",    
  },
];

const arrayViewAll = [
  {
    num:"001",
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Fire",
    weaknesses: "Water"
  },

  {
    num:"002",
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    type: "Ice",
    weaknesses:"Fire",
  },
  {
    num:"003",
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Water",
    weaknesses:"Ice", 
  },
];

const arrayDescendant =[
  {
    num:"003",
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Water",
    weaknesses:"Ice", 
  },
  {
    num:"002",
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    type: "Ice",
    weaknesses:"Fire",
  },
  {
    num:"001",
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    type: "Fire",
    weaknesses: "Water"
  },

];

const arrayOriginal = [
  { name: "Harry Potter" },
  { name: "Draco Malfoy" },
  { name: "Ron Weasley" },
  { name: "Draco Malfoy" },
];

const arrayAz = [
  { name: "Draco Malfoy" },
  { name: "Draco Malfoy" },
  { name: "Harry Potter" },
  { name: "Ron Weasley" },
];

const arrayZa = [
  { name: "Ron Weasley" },
  { name: "Harry Potter" },
  { name: "Draco Malfoy" },
  { name: "Draco Malfoy" },
];

describe("allPokemon", () => {
  test("is a function", () => {
    expect(typeof allPokemon).toBe("function");
  });

  test("Mostrar todos los Datos`", () => {
    expect(allPokemon(arrayAll)).toEqual(arrayViewAll);
  });
});

describe("orderPokemonAz", () => {
  test("is a function", () => {
    expect(typeof orderPokemonAz).toBe("function");
  });

  test("Oredenar los nombres de la A-Z", () => {
    expect(orderPokemonAz(arrayOriginal)).toStrictEqual(arrayAz);
  });
});

describe("orderPokemonZa", () => {
  test("is a function", () => {
    expect(typeof orderPokemonZa).toBe("function");
  });

  test("Ordenar los nombres de la Z-A", () => {
    expect(orderPokemonZa(arrayOriginal)).toStrictEqual(arrayZa);
  });
});

describe("orderedDataDescendant", () => {
  test("is a function", () => {
    expect(typeof orderedDataDescendant).toBe("function");
  });

  test("Ordenar los números de manera descendente", () => {
    expect(orderedDataDescendant(arrayAll)).toStrictEqual(arrayDescendant);
  });
});
describe("filterType", () => {
  test("is a function", () => {
    expect(typeof filterType).toBe("function");
  });

    test("Filtrar por tipo", () => {
    expect(filterType(arrayAll, "Fire")).toEqual([{"num":"001","gender": "male", "house": "Gryffindor", "name": "Harry Potter", "species": "human", "type": "Fire", "weaknesses": "Water"}]);
  }); 

});

describe("filterWeakness", () => {
    test("is a function", () => {
      expect(typeof filterWeakness).toBe("function");
    });
  
      test("Filtrar por tipo", () => {
      expect(filterWeakness(arrayAll, "Ice")).toEqual([{"num":"003","name": "Ron Weasley", "species": "human",  "gender": "male", "house": "Gryffindor", "type": "Water", "weaknesses": "Ice"}]);
      
    }); 
  
});