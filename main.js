const nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");
let costoTotal = 0;

while (true) {
  let entrada = prompt(
    "Hola " + nombreUsuario + ", ingresa el precio de la cámara a comprar\n(O escribe ESC para salir):"
  );

  if (entrada === "ESC" || entrada === null) {
    break; 
  }

  if (entrada === "") {
    alert("No ingresaste ningún valor. Inténtalo de nuevo.");
    continue; 
  }

  let precioCamara = parseFloat(entrada);

  if (precioCamara > 0) {
    costoTotal = costoTotal + precioCamara;
    alert("¡Cámara agregada!\nTu subtotal actual es de: $" + costoTotal + " USD.");
    console.log("Se agregó una cámara por $" + precioCamara + " USD.");
  } else {
    alert("Por favor, ingresa un número válido mayor a 0.");
    console.log("El usuario ingresó un precio no válido.");
  }
}

alert("Gracias por tu compra, " + nombreUsuario + ". El costo total final es de: $" + costoTotal + " USD.");
console.log("Compra finalizada para " + nombreUsuario + ". Total a pagar: $" + costoTotal + " USD.");