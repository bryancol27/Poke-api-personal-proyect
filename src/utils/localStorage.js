const makeHistorial = (name, img) => {

    const currentHistorial = JSON.parse(localStorage.getItem("history")) || [];

    let pokemon = {
        nombre: name,
        imagen: img
    };

    if(currentHistorial.length == 5){
        currentHistorial.shift()
    }

    currentHistorial.push(pokemon);

    localStorage.setItem("history", JSON.stringify(currentHistorial));
};

export default makeHistorial