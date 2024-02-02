/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo
console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

asignarTextoElemento ('h1', 'Juego del número secreto');
asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //usuariio no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
    } else{

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
}

function condicionesIniciales(){
    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de numeros
    //generar numero aleatorio
    //intentos
    condicionesIniciales();
     //deshabilitar boton nuevamente
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}
*/

//variable del numero secreto
let numeroSecreto = 0; 
 //intentos de usuario
let intentos = 0;
//lista de los numeros que ya salieron
let listaNumerosSorteados = [];
//numero maximo
let numeroMaximo = 10;


//funcion para asignar texto a las etiquetas HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//verifica el intento con el numero secreto
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //verifica el numero de intentos del usuario
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        //activa el boton nuevo juego cuando acierta el numero
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //indica que el numero secreto es menor
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p','El numero secreto es menor');
        } else {
            //indica que el numero secreto es mayor
            asignarTextoElemento ('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

//limpia los datos de la caja
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//genera el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');
    } else{
    //si el numero generado esta incluido en la lista se llama a si misma para regresar hasta incluir uno que no este en el arreglo y pasa al else
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //recursividad
        return generarNumeroSecreto();
    } else {
        //el numero que no estaba en la lista es agregado para no aparecer al volver a sortearlo
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

//condiciones iniciales del juego, limpia el input, asigna los titulos y rangos, llama a la funcion para geerar el numero secreto e inicializa los intentos en 1
function condicionesIniciales() {
    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

//restablece el juego al acertar el numero y presionar el boton nuevo juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();