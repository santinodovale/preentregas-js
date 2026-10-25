// Pre-Entrega 3: Simulador de Tienda de Cámaras con Funciones

//FUNCIONES
function mostrarBienvenida(nombreTienda) {
  let nombre = prompt("¡Bienvenido a " + nombreTienda + "! ¿Cuál es tu nombre para comenzar?");
  return nombre;
}

const acumularPrecio = function(subtotalActual, precioNuevo) {
  let resultado = subtotalActual + precioNuevo;
  return resultado;
};

const calcularEnvio = (totalCompra) => {
  let costoEnvio = 15; // Envío fijo en dólares
  return totalCompra + costoEnvio;
};

const nombreUsuario = mostrarBienvenida("Tienda de Cámaras");
let costoTotal = 0;


//PROGRAMA PRINCIPAL
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
    costoTotal = acumularPrecio(costoTotal, precioCamara);
    
    alert("¡Cámara agregada!\nTu subtotal actual es de: $" + costoTotal + " USD.");
    console.log("Se agregó una cámara por $" + precioCamara + " USD.");
  } else {
    alert("Por favor, ingresa un número válido mayor a 0.");
    console.log("El usuario ingresó un precio no válido.");
  }
}

if (costoTotal > 0) {
  let totalConEnvio = calcularEnvio(costoTotal);
  
  alert("Resumen de compra para " + nombreUsuario + ":\nSubtotal: $" + costoTotal + " USD.\nCosto de envío: $15 USD.\nTotal final con envío: $" + totalConEnvio + " USD.");
  console.log("Compra finalizada. Total con envío: $" + totalConEnvio + " USD.");
} else {
  alert("Gracias por visitar la tienda, " + nombreUsuario + ". ¡Hasta luego!");
  console.log("El usuario salió sin realizar compras.");
}