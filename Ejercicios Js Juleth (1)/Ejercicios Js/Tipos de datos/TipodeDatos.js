let name = "Ilya";
//La expresion es el numero 1//
alert(`Hello ${1}`);

//Nose ejecutará porque name esta entre comillas dobles//
alert(`Hello ${"name"}`); 
//Mostrara "Hello Name" y no Ilya//

//La expresion name es una variable//
alert(`Hello ${name}`);