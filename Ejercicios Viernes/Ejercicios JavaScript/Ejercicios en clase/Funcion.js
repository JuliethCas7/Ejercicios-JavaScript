//Declaro la función//
function multiplicar(num1, num2) {
    return num1 * num2;
}

    // Pedimos al usuario que ingrese los números
    const num1 = parseFloat(prompt("Ingresa el primer número: "));
    const num2 = parseFloat(prompt("Ingresa el segundo número: "));
    multiplicar(num1,num2)

let result = multiplicar(num1,num2);
  alert( result );