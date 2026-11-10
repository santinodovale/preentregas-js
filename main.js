// Pre-Entrega 4: Simulador de Carrito de Compras (Tienda de Cámaras)

// 1. Catálogo fijo de la tienda
const catalogoTienda = [
  "Canon EOS R50",
  "Sony Alpha a6400",
  "Nikon Z50",
  "Fujifilm X-T30 II",
  "Panasonic Lumix G7"
];

// 2. Carrito dinámico del usuario
const carrito = [];

// Función para generar y mostrar el texto del carrito usando for...of
function mostrarCarrito(lista) {
  if (lista.length === 0) {
    alert("Tu carrito de compras está vacío.");
  } else {
    let resumen = "--- PRODUCTOS EN TU CARRITO ---\n";
    for (const producto of lista) {
      resumen = resumen + "- " + producto + "\n";
    }
    resumen = resumen + "\nTotal de productos: " + lista.length;
    alert(resumen);
  }
}

// ALGORITMO PRINCIPAL
const nombreUsuario = prompt("¡Bienvenido a la Tienda de Cámaras! ¿Cuál es tu nombre?");
let continuar = true;

while (continuar) {
  let opcion = prompt(
    "Hola " + nombreUsuario + ", elige una opción:\n\n" +
    "1. Ver catálogo y agregar al carrito\n" +
    "2. Ver carrito y opciones de modificación\n" +
    "3. Buscar un producto en tu carrito\n" +
    "4. Finalizar compra (o escribe ESC)"
  );

  if (opcion === null || opcion === "4" || opcion.toUpperCase() === "ESC") {
    continuar = false;
    alert("Gracias por visitar la tienda, " + nombreUsuario + ". ¡Hasta pronto!");
    break;
  }

  // OPCIÓN 1: Ver catálogo + PUSH / UNSHIFT (Agregar productos)
  if (opcion === "1") {
    let listado = "--- CATÁLOGO DISPONIBLE ---\n";
    for (const camara of catalogoTienda) {
      listado = listado + "- " + camara + "\n";
    }
    listado = listado + "\n¿Qué cámara deseas agregar a tu carrito?";

    let eleccion = prompt(listado);

    if (eleccion !== null && eleccion !== "") {
      if (catalogoTienda.includes(eleccion)) {
        // PUSH: Agregar elemento al final del array
        carrito.push(eleccion);
        alert(eleccion + "' se agregó a tu carrito.");
      } else {
        alert("Ese modelo no pertenece al catálogo.");
      }
    }

  // OPCIÓN 2: Ver carrito + POP (eliminar) / SPLICE (reemplazar)
  } else if (opcion === "2") {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
    } else {
      mostrarCarrito(carrito);

      let accion = prompt(
        "¿Deseas realizar algún cambio?\n" +
        "1. Quitar el último producto agregado\n" +
        "2. Reemplazar la primera cámara del carrito\n" +
        "3. Volver al menú principal"
      );

      if (accion === "1") {
        // POP: Elimina el último elemento
        const eliminado = carrito.pop();
        alert("Se eliminó de tu carrito: " + eliminado);
      } else if (accion === "2") {
        // SPLICE: Reemplaza por índice (posición 0)
        let reemplazo = prompt("Ingresa el nuevo producto que reemplazará a '" + carrito[0] + "':");
        if (reemplazo !== null && reemplazo !== "") {
          let anterior = carrito[0];
          carrito.splice(0, 1, reemplazo);
          alert("Se reemplazó '" + anterior + "' por '" + reemplazo + "'.");
        }
      }
    }

  // OPCIÓN 3: INCLUDES e INDEXOF (Buscar en el carrito)
  } else if (opcion === "3") {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
    } else {
      let busqueda = prompt("¿Qué modelo deseas verificar en tu carrito?");
      if (busqueda !== null && busqueda !== "") {
        if (carrito.includes(busqueda)) {
          let posicion = carrito.indexOf(busqueda);
          alert(busqueda + "' está en tu carrito en la posición " + posicion + ".");
        } else {
          alert(busqueda + "' no se encuentra en tu carrito.");
        }
      }
    }

  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
  }
}

// Resumen final acumulado al salir
mostrarCarrito(carrito);