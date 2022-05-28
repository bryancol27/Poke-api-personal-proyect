import { firstFetch, secondFetch } from "./utils/fetchData.js";
import { printResults } from "./utils/printPokemon.js";
import { input } from './nodos.js'
import { visibleCards } from "./utils/visibiltyCards.js";

const urlBase = 'https://pokeapi.co/api/v2/pokemon';

export function principalFunction(){
    const searchValue = input.value.toLowerCase();
    (searchValue.length > 0) ? pokemonStats(searchValue) : null;
};

export async function pokemonStats(id){
    const api1 = await firstFetch(urlBase, id) || undefined;
    const api2 = await secondFetch(urlBase, id) || undefined;
    
    if(api1 && api2){
        printResults({
            ...api1,
            ...api2
        });

        visibleCards();
    }
};

export default pokemonStats;