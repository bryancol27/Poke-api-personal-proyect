import pokemonStats from '../main.js';
import { historyPlace, prepareLayout} from '../nodos.js'


const printStorage = () => {
    
    const item = JSON.parse(localStorage.getItem("history"));
    
    if(item){
        item.forEach(element => {
            const div = document.createElement('div');
            const img = document.createElement('img');

            div.classList.add('main__history__place-box');
            img.src = element.imagen;

            div.appendChild(img);
            div.addEventListener('click', () => {
                prepareLayout();
                pokemonStats(element.nombre)});

            historyPlace.appendChild(div)
        });
    }
};

export default printStorage;
//piplup