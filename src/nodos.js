import { changueVisibilyButton } from "./utils/button.js";
import { changuePositionSearcher, changuePositionHistory} from "./utils/mainSection.js";
import printStorage from "./utils/printStorage.js"
import { principalFunction } from './main.js'


//assets & form
export const input = document.querySelector('.form__space__input');
export const button = document.querySelector('.form__space__button');
export const finderForm = document.querySelector('#finderForm');
export const imagenPokebola = document.querySelector('#imgPokebola');
export const historyPlace = document.querySelector('#main__history__place')

//cards 
export const results = document.querySelector('#sectionResults');

//cardComponents 
//card1
export const imgPokemon = document.querySelector('#pokemonImg');
export const namePokemon = document.querySelector('#pokemonId');
export const typePokemon = document.querySelector('#pokemonId2')

//card2
export const abilityPokemon = document.querySelector('#abilityPlace');
export const featuresPlace = document.querySelector('#featuresPlace');

//card3
export const description = document.querySelector('#main__results__des');

//Error Screen
export const errorScreenPrincial = document.querySelector('#main__no__results');
export const blankSpace = document.querySelector('#main__no__results__blank');
export const circleBlankSpace = document.querySelector('#main__no__results__blank-circle');
export const messageBlankSpace = document.querySelector('#main__no__results__blank-message');
export const lineCircle = document.querySelectorAll('#line');

//eventListener layout
input.addEventListener('click', changueVisibilyButton);
button.addEventListener('click', () => {
    prepareLayout();
});

window.addEventListener('load', printStorage);

export function prepareLayout(){
    principalFunction();
    changuePositionSearcher();
    changuePositionHistory();
}




