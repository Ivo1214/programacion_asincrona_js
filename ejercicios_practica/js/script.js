"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

const leerDatosPokemon = async (ruta) => {
    let infoPokemon = await fetch(ruta);
    if (!infoPokemon.ok) {
        // throw parara la ejecucion de la funcion
        throw new Error (infoPokemon.status);
    } else {
        console.log("Datos leidos correctamente.");
        infoPokemon = await infoPokemon.json();
        return infoPokemon;
    }
};

const procesarDatos = async () => {
    const listaPokemons = await leerDatosPokemon("./bulbasaur.json");
    const nombre = listaPokemons.name.toUpperCase();
    const tipos = listaPokemons.types;
    const estadisticas = listaPokemons.stats;
    let acumulador = "";

    // Nombre
    document.getElementById("pokeName").innerHTML = `<h2>${nombre}</h2>`;

    // Tipos
    tipos.forEach(element => {
        acumulador += `<h3>${element.type.name}</h3>`;
    });
    document.getElementById("pokeTypes").innerHTML = acumulador;

    // Estadisticas
    acumulador = "";
    estadisticas.forEach(element => {
        acumulador += `<div>
                        <p>${element.stat.name}</p>
                        <p>${element.base_stat}</p>
                    </div>
                    `;
    });
    document.getElementById("pokeStats").innerHTML = acumulador;
};

procesarDatos ();
