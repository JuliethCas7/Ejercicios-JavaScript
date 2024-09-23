//La siguiente función retorna truesi el parámetro agees mayor que 18//
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

  //¿La función funcionará de forma diferente si elsese elimina?//
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
  //no afecta el comportamiento de la funcion si o se coloca el else, este solamente hace que el codigo sea mas explicito//
  