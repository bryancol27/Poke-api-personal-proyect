import errorScreen from "./printError.js";

export const firstFetch = async (url, identificador) => {
    try {
        const res = await fetch(`${url}/${identificador}`);
        if(res.status != 200){
            throw(res.status)
        } 
        const {id, abilities, types, height, weight, sprites, name } = await res.json();

        return {
            name,
            id, 
            abilities, 
            types, 
            height, 
            weight,
            sprites,
        }
        
    } catch (error) {
        (error == 404) ? errorScreen(true) : errorScreen(false);
    }
}

export const secondFetch = async (url, name) => {
    try {
        const res = await fetch(`${url}-species/${name}`);
        if(res.status != 200){
            throw(res.status)
        } 
        const {color, is_baby, is_legendary, is_mythical, shape, flavor_text_entries, genera} = await res.json();
        
        return {
            color, 
            is_baby, 
            is_legendary, 
            is_mythical, 
            shape,
            flavor_text_entries,
            generoPokemon: genera.find(genero => genero.language.name == 'es'),
        }

    } catch (error) {
        console.error('Nula carga');
    }
}