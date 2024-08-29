function ingresarArmoniaTienda() {
let nombreIngresado = prompt("Ingresa tu nombre");
console.log("Nombre ingresado:", nombreIngresado); 

if (nombreIngresado) {
alert("Bienvenidx a Armonia Tienda " + nombreIngresado);

} else {
    alert("Nombre inválido");
    return;
}

let queresSuscribirte = confirm("Querés recibir las mejores ofertas de nuestra tienda?");
console.log("Se suscribió:", queresSuscribirte);
if (queresSuscribirte) {
    let email = "";
    while (true) {
     email = prompt("Ingresa tu correo electrónico");
     console.log("Correo ingresado:", email);
     if (true) {
        alert("Gracias por suscribirte con el correo: " + email);
        break;
     } else {
        alert("Por favor, ingresa un correo electrónico válido.");
     }

    }
}

let seleccionaOpcion = prompt("Elegí que novedades deseas recibir:\n Días de envios gratis\n Promociones bancarias\n Descuentos en plantas y macetas seleccionadas\n Días de 2x1\n Todas!!");
console.log("Opción seleccionada:", seleccionaOpcion);

    if (seleccionaOpcion) {
        alert("Gracias por suscribirte, recibirás toda la info que necesitás!");
    }

     alert("Sorpresa! Al suscribirte participas de un descuento especial!");

       
    const numeroRiego = 2;
    let adivinado = false;

while (!adivinado) {
    const intento = parseInt(prompt("Cuantas veces por semana hay que regar una Monstera en verano?"));
    console.log("Número de riego ingresado:", intento);

    if (isNaN(intento)) {
        alert("Por favor ingresa un número válido.");
    } else if (intento === numeroRiego) {
        alert("Felicitaciones! Ganaste un 20%off en tu próxima compra!");
        adivinado = true;
        break;

    } else {
        alert("Ups! Respuesta incorrecta. Gracias por intentar!");
        break;
    }

}

}

ingresarArmoniaTienda();












