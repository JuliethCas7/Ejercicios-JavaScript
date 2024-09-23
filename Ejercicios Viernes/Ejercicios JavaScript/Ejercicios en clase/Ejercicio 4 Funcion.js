function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
        //Esto es un bucle, mientras i sea menor que n//
        //El bucle comienza con i=1 y sigue incrementando i en cada iteraccion//
    
      result *= x;
    }
  
    return result;//Devuelve el resultado//
  }
  //Solicita valores al usuario//
  let x = prompt("x?", '');//Abre un cuadro de dialogo//
  let n = prompt("n?", '');
  
  if (n < 1) {//indica si el exponente es 0 o negativo//
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }