const nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");
let costoTotal = 0;
let continuar = true;

while (continuar) {
  let entradaPrecio = prompt(
    "Hola " + nombreUsuario + ', ingresa el precio de la cámara que deseas comprar\n\n(O escribe "salir" para finalizar la compra):'
  );

  if (entradaPrecio === "salir") {
    continuar = false;
  } else {
    let precioCamara = entradaPrecio;

    if (precioCamara > 0) {
      costoTotal = costoTotal + precioCamara;
      alert("¡Cámara agregada!\nTu subtotal actual es de: $" + costoTotal + " USD.");

    } else {
      alert('Por favor, ingresa un precio válido en números o escribe "salir" para finalizar la compra.');

    }
  }
}

alert("Gracias por tu compra, " + nombreUsuario + ". El costo total final es de: $" + costoTotal + " USD.");