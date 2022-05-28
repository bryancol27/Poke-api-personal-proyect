import { errorScreenPrincial, blankSpace, circleBlankSpace, messageBlankSpace, lineCircle } from '../nodos.js';

const textoBusqueda = "Lo sentimos, no hemos podido hallar tu busqueda verifica bien tu nombre o id";
const textoApi = "Lo sentimos, hemos tenido problemas con nuestro software intenta luego";

const errorScreen = (busqueda) =>{

    errorScreenPrincial.classList.remove('hidden');
    errorScreenPrincial.classList.add('visible_noResults');

    blankSpace.classList.add('visible_blank');

    circleBlankSpace.classList.add('visible_circle');

    messageBlankSpace.classList.add('visible_text');
    (busqueda) ? messageBlankSpace.textContent = textoBusqueda : messageBlankSpace.textContent = textoApi;

    lineCircle.forEach((linea => {
        linea.classList.add('visible_lines');
    }))

    //deshabilitar efectos.
    setTimeout(() => {
        errorScreenPrincial.classList.remove('visible_noResults');
        errorScreenPrincial.classList.add('hidden');
        blankSpace.classList.remove('visible_blank');
        circleBlankSpace.classList.remove('visible_circle');
        messageBlankSpace.classList.remove('visible_text');
        lineCircle.forEach((linea => {
            linea.classList.remove('visible_lines');
        }))
    }, 4000)

};
export default errorScreen

