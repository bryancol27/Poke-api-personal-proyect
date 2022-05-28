import { finderForm, imagenPokebola, historyPlace } from "../nodos.js";

export const changuePositionSearcher = () => {
    finderForm.classList.remove('main__principal');
    finderForm.classList.add('mainUp');
    imagenPokebola.classList.add('loadingApi');
    setTimeout(()=>{
        imagenPokebola.classList.remove('loadingApi');
    }, 3000);
};

export const changuePositionHistory = () =>{
    historyPlace.classList.add('hidden');
    historyPlace.classList.remove('main__history__place');
    setTimeout(()=>{
        historyPlace.classList.add('secondTimeDom__history');
        historyPlace.classList.remove('hidden');
        historyPlace.classList.add('main__history__place');
        historyPlace.classList.remove('firstTimeDom__history');
    }, 3000);
}