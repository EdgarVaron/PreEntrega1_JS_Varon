let nombreUsuario = prompt("Ingresa tu nombre: ");
while (nombreUsuario == "") {
	alert("No hay problema si no te quieres identificar");
	nombreUsuario = ("esperamos tener tu confianza dentro de poco.")
}

alert("Bienvenido/a " + nombreUsuario);

let mensaje = prompt("Deseas comprar un producto? (s = si) (n = no)")
let total = 0;

while (mensaje.toLocaleLowerCase() == "s") {
	let producto = prompt("1 - 100 dolares americanos / $500910 cop \n2 - 100 euros / $475554 cop \n3 - 100 reales / $88410 cop")

	switch (producto) {
		case "1":
			alert("Agregaste 100 dolares americanos $500910 cop 🛒");
			incrementarTotal(500910)
			break;
		case "2":
			alert("Agregaste 100 euros / $475554 cop 🛒");
			incrementarTotal(475554)
			break;
		case "3":
			alert("Agregaste 100 reales / $88410 cop 🛒");
			incrementarTotal(88410)
			break;

		default:
			alert("Codigo no valido")
	}

	mensaje = prompt("Deseas comprar otro producto? (s = si) (n = no)");
}

alert("El monto total de su compra es: $" +total);

function incrementarTotal(precio) {
	total = total + precio;
	alert("Subtotal hasta el momento $" + total);
}