const encriptador = document.querySelector('#encriptador');
const desencriptador = document.querySelector('#desencriptador');
const copiar = document.querySelector('#copiar');
const mensaje = document.querySelector('#mensaje');
const resultado = document.querySelector('#resultado');

encriptador.addEventListener('click', mostrarMensaje);
desencriptador.addEventListener('click',mostrarResultado);

function mostrarMensaje(){
    let mensajeValor = mensaje.value;
    let mensajeLetras = mensajeValor.split("");
    let nuevoMensaje = [];
    for (let palabra of mensajeLetras) {
        palabra = palabra.replaceAll("e","enter");
        palabra = palabra.replaceAll("i","imes");
        palabra = palabra.replaceAll("o","ober");
        palabra = palabra.replaceAll("a","ai");
        palabra = palabra.replaceAll("u","ufat");
        nuevoMensaje.push(palabra);
    }
    const resultadoMensaje = nuevoMensaje.join('');
    return resultado.value = resultadoMensaje;
}

function mostrarResultado(){
    let resultadoValor = mensaje.value;
    let resultadoLertras = resultadoValor.split(" ");
    let nuevoResultado = [];
    for (let palabra of resultadoLertras){
        palabra = palabra.replaceAll("enter","e")
        palabra = palabra.replaceAll("imes","i")
        palabra = palabra.replaceAll("ober","o")
        palabra = palabra.replaceAll("ai","a")
        palabra = palabra.replaceAll("ufat","u");
        nuevoResultado.push(palabra);
    }
    const mensajeMensaje = nuevoResultado.join(' ');
    return resultado.value = mensajeMensaje;
}



