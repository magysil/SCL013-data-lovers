import { allPokemon, orderPokemonAz, orderPokemonZa } from "../src/data.js";

const arrayAll = [
  {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
  },

  {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
  },

  {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
  },
];

const arrayViewAll = [
  {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
  },

  {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
  },
  {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
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
