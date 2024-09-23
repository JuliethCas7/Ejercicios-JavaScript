//Ejercicio con if//
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  //El codigo con if es mas explicito, lo que haace que sea mas facil de entender el codigo//

  //Ejercicio con ?//
  function min(a, b) {
    return a < b ? a : b;
  }
  //Este operador hace lo mismo que el if, pero resume mas lineas de codigo//
  //En caso de igualdad, no necesita devolver la funcion//