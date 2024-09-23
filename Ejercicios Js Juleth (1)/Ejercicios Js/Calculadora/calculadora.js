let num1 = parseFloat(prompt("Ingresa el primer número:"));
let operador = prompt("Ingresa el operador (+, -, *, /):");
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;

switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Error: División por cero";
        }
        break;
    default:
        resultado = "Operador no válido";
        break;
}

alert("El resultado es: " + resultado);