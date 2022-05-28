import { imgPokemon, namePokemon, abilityPokemon, featuresPlace, description,typePokemon, historyPlace } from "../nodos.js";
import makeHistorial from "./localStorage.js";
import printStorage from "./printStorage.js"

export const printResults = (infoPrint) => {
    
    clearCards();

    makeHistorial(infoPrint.name, infoPrint.sprites.front_default);
    printStorage();

    card1({
        img: infoPrint.sprites,
        name: infoPrint.name,
        type: infoPrint.types[0].type.name
    });

    card2({
        abilities: infoPrint.abilities.map(ability => ability.ability.name),
        features: [["color", infoPrint.color.name],
        ["Altura",  infoPrint.height],
        ["Baby",  infoPrint.is_baby],
        ["Legendario",  infoPrint.is_legendary],
        ["Mitico",  infoPrint.is_mythical],
        ["Peso",  infoPrint.weight]]
    });

    const esDescription = infoPrint.flavor_text_entries.filter( element => element.language.name == 'es');
    card3({
        des1: esDescription[0],
        des2: esDescription[1],
        tipo: infoPrint.shape,
        genero: infoPrint.generoPokemon.genus
    });
};  

function card1(elementos){
    imgPokemon.src = elementos.img.front_default;
    namePokemon.textContent = elementos.name;
    typePokemon.textContent = elementos.type
};

function card2(elementos){
    elementos.abilities.forEach(element => {
        printParagraph(abilityPokemon, element, "Habilidad", "ability")
    });
    elementos.features.forEach(element => {
        printParagraph(featuresPlace, element[1], element[0], "featuresPokemon")
    });
};

function card3(elementos){
    printParagraph(description, elementos.des1.flavor_text, "Descripcion", 'desZone')
    printParagraph(description, elementos.des2.flavor_text, "Descripcion", 'desZone')
    printParagraph(description, elementos.tipo.name, "Tipo Pokemon", 'desZone')
    printParagraph(description, elementos.genero, "Genero", 'desZone')
};

function printParagraph(campo, valor, helper, clase){
    const parrafo = document.createElement('p');
    const span = document.createElement('span');

    span.textContent = valor
    parrafo.textContent = `${helper}: `;
    
    parrafo.classList.add(clase)

    parrafo.appendChild(span);
    campo.appendChild(parrafo);
}

function clearCards(){

    abilityPokemon.innerHTML = "";
    featuresPlace.innerHTML = "";
    description.innerHTML = "";
    historyPlace.innerHTML = "";
}