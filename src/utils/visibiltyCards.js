import { results } from '../nodos.js';

export const visibleCards = () => {
    results.classList.add('hidden');
    results.classList.remove('visible__cards');
    setTimeout(()=>{
        results.classList.remove('hidden');
        results.classList.add('visible__cards');
    }, 3000)
};