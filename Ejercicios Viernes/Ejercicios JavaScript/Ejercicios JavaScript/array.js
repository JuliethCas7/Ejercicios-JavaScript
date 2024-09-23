 let Jugadores = ["Kevin de Bruyne", "Messi", "Falcao"];
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
  default:
    alert("No hay jugadores de ese país");
    break;
}