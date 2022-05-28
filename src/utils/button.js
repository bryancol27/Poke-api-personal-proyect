import { button } from "../nodos.js";

export const changueVisibilyButton = () => {
    button.classList.remove('hidden__button');
    button.classList.add('visible__button');
};