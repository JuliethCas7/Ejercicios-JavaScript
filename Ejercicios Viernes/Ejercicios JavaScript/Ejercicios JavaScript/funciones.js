function AnalizarJugador() { // Eliminar el parámetro si no es necesario
  let Jugadores = ["Kevin de Bruyne", "Messi", "Falcao", "Mbappe", "Mane","Araujo"];
  let pais = prompt("Elige un país y te diré qué jugador es de ahí");

  switch (pais) {
    case "Belgica":
      alert(Jugadores[0]);
      break;
    case "Argentina":
      alert(Jugadores[1]);
      break;
    case "Colombia":
      alert(Jugadores[2]);
      break;
    case "Francia":
      alert(Jugadores[3]);
      break;
    case "Ghana":
      alert(Jugadores[4]);
      case "Ghana":
        alert(Jugadores[4]);
      break;
    default:
      alert("No hay jugadores de ese país");
      break;
  }
}


// Llamar a la función
AnalizarJugador();