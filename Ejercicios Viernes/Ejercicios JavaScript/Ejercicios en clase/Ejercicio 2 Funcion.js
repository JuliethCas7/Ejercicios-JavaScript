//Usando operador ?//
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
  //Si la condición es verdadera, devuelve un valor, y si es falsa, devuelve otro valor, se comporta de manera muy similar a un if-else pero en una línea//

  //Usando operador OR o ||//
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }
  //Si la primera expresión es verdadera, devuelve ese valor y se detiene, si no, evalúa la segunda parte. Es más directo y menos "verbal" que el operador ?//
  //Ambas formas funcionan igual en este caso, pero la del operador OR es más compacta, porque evita la necesidad de definir//