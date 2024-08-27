
let nombreIngresado = prompt("Ingresa tu nombre");

if (nombreIngresado) {
alert("Bienvenidx a Armonia Tienda " + nombreIngresado);

let queresSuscribirte = confirm("Querés recibir las mejores ofertas de nuestra tienda?");
if (queresSuscribirte) {
prompt("Ingresa tu correo electrónico");
}

let seleccionaOpcion = prompt("Elegí que novedades deseas recibir:\n Días de envios gratis\n Promociones bancarias\n Descuentos en plantas y macetas seleccionadas\n Días de 2x1\n Todas!!");

    if (seleccionaOpcion) {
        alert("Gracias por suscribirte, recibirás toda la info que necesitás!");
    }

} else {
   alert("Nombre inválido");

}


