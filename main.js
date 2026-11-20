class Producto {
  constructor(id, nombre, precio, stock, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.categoria = categoria;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender(cantidad) {
    if (this.stock >= cantidad) {
      this.stock = this.stock - cantidad;
      return true;
    } else {
      return false;
    }
  }

  aplicarDescuento(porcentaje) {
    let descuento = (this.precio * porcentaje) / 100;
    this.precio = this.precio - descuento;
  }
}

const catalogoTienda = [
  new Producto(1, "Canon EOS R50", 850, 5, "Cámaras"),
  new Producto(2, "Sony Alpha a6400", 900, 3, "Cámaras"),
  new Producto(3, "Nikon Z50", 750, 4, "Cámaras"),
  new Producto(4, "Lente Canon 50mm f/1.8", 200, 10, "Objetivos"),
  new Producto(5, "Lente Sigma 35mm f/1.4", 700, 2, "Objetivos")
];

const carrito = [];

function obtenerTextoCatalogo() {
  let listado = "--- CATÁLOGO DE PRODUCTOS ---\n\n";
  for (const producto of catalogoTienda) {
    listado = listado + producto.id + ". " + producto.nombre + 
              " | Precio: $" + producto.precio + " USD (c/IVA: $" + producto.sumarIva() + ")" +
              " | Stock: " + producto.stock + "\n";
  }
  return listado;
}

function mostrarResumenCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito de compras está vacío.");
  } else {
    let resumen = "--- RESUMEN DE TU CARRITO ---\n\n";
    let total = 0;

    for (const item of carrito) {
      let subtotal = item.producto.sumarIva() * item.cantidad;
      resumen = resumen + "- " + item.producto.nombre + " x" + item.cantidad + 
                " -> Subtotal c/IVA: $" + subtotal + " USD\n";
      total = total + subtotal;
    }

    resumen = resumen + "\nTOTAL COMPRA (con IVA): $" + total + " USD";
    alert(resumen);
  }
}

const nombreUsuario = prompt("¡Bienvenido a la Tienda de Cámaras! ¿Cuál es tu nombre?");
let continuar = true;

while (continuar) {
  let opcion = prompt(
    "Hola " + nombreUsuario + ", elige una opción:\n\n" +
    "1. Ver catálogo y comprar producto\n" +
    "2. Ver carrito y total acumulado\n" +
    "3. Buscar un producto en la tienda por ID o Nombre\n" +
    "4. Finalizar compra y salir (o escribe ESC)"
  );

  if (opcion === null || opcion === "4" || opcion.toUpperCase() === "ESC") {
    continuar = false;
    alert("Gracias por visitar la tienda, " + nombreUsuario + ". ¡Hasta pronto!");
    break;
  }

  if (opcion === "1") {
    let mensaje = obtenerTextoCatalogo() + "\nIngresa el ID del producto que deseas comprar:";
    let entradaId = prompt(mensaje);

    if (entradaId !== null && entradaId !== "") {
      let idSeleccionado = parseInt(entradaId);
      
      let productoEncontrado = null;
      for (const p of catalogoTienda) {
        if (p.id === idSeleccionado) {
          productoEncontrado = p;
          break;
        }
      }

      if (productoEncontrado !== null) {
        let entradaCantidad = prompt("¿Cuántas unidades de '" + productoEncontrado.nombre + "' deseas?");
        let cantidad = parseInt(entradaCantidad);

        if (cantidad > 0) {
          let ventaExitosa = productoEncontrado.vender(cantidad);

          if (ventaExitosa) {
            carrito.push({ producto: productoEncontrado, cantidad: cantidad });
            alert("Se agregaron " + cantidad + " unidad(es) de '" + productoEncontrado.nombre + "' al carrito.");
          } else {
            alert("Stock insuficiente. Solo quedan " + productoEncontrado.stock + " unidad(es) disponibles.");
          }
        } else {
          alert("Cantidad no válida.");
        }
      } else {
        alert("No existe ningún producto con el ID ingresado.");
      }
    }

  } else if (opcion === "2") {
    mostrarResumenCarrito();

  } else if (opcion === "3") {
    let busqueda = prompt("Ingresa el nombre del producto o categoría que deseas buscar:");

    if (busqueda !== null && busqueda !== "") {
      let coincidencia = null;
      for (const p of catalogoTienda) {
        if (p.nombre.toLowerCase() === busqueda.toLowerCase() || p.categoria.toLowerCase() === busqueda.toLowerCase()) {
          coincidencia = p;
          break;
        }
      }

      if (coincidencia !== null) {
        alert(
          "Producto encontrado:\n" +
          "ID: " + coincidencia.id + "\n" +
          "Nombre: " + coincidencia.nombre + "\n" +
          "Precio sin IVA: $" + coincidencia.precio + " USD\n" +
          "Precio con IVA (21%): $" + coincidencia.sumarIva() + " USD\n" +
          "Stock disponible: " + coincidencia.stock
        );
      } else {
        alert("No se encontró ningún producto que coincida con '" + busqueda + "'.");
      }
    }

  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
  }
}

mostrarResumenCarrito();