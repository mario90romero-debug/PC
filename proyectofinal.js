function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let continuar, opcionUsuario, opcionPC;
arreglo = ["piedra", "papel", "tijera"];


do {
    opcionUsuario = prompt("ingresa una opcion (piedra, papel o tijera)").toLowerCase() 
    if (!arreglo.includes(opcionUsuario)){
        alert("ingresaste una opcion erronea")
        break;
    }
    opcionPC = arreglo[getRandomInt(3)]
    console.log(opcionPC)
    if (opcionUsuario === opcionPC) {
        alert("empate");
    } else if (
        (opcionUsuario === "piedra" && opcionPC === "tijera") ||
        (opcionUsuario === "papel" && opcionPC === "piedra") ||
        (opcionUsuario === "tijera" && opcionPC === "papel")
    ) {
        alert("gano el usuario");
    } else {
    alert("perdio el usuario");
}
    continuar = prompt("¿deseas continuar? (si/no)");
} while (continuar === "si");