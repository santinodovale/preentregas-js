const nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
let cantCamaras = prompt("¿Cuántas cámaras deseas comprar?");
let precio = prompt("¿Cuál es el precio unitario de la cámara en dólares?");

cantCamaras = parseInt(cantCamaras);
precio = parseFloat(precio);

let costoTotal = cantCamaras * precio;

const mensajeBienvenida = "Gracias por tu visita, " + nombre + ". Has seleccionado " + cantCamaras + " cámara(s).";
const mensajeTotal = "El costo total de tu compra es de: $" + costoTotal + " USD.";

console.log(mensajeBienvenida);
console.log(mensajeTotal);

alert(mensajeBienvenida + "\n" + mensajeTotal);