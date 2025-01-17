//Ejercicio 1
let mensajeBienvenida = "Hola"
console.log(mensajeBienvenida);

//Ejercicio 2
let nombre = "Roger";
console.log(`¡Hola, ${nombre}!`);

//Ejercicio 3
let nombre1 = "Roger";
alert(`¡Hola, ${nombre1}!`);

//Ejercicio 4
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?.");
alert(`Tu lenguaje favorito es ${lenguajeFavorito} :)`);

//Ejercicio 5
let valor1 = 0;
let valor2 = 0;
let resultado = 0;

//Ejercicio 6
alert("Vamos hacer una suma");
valor1 = parseInt(prompt("dame el primer numero"));
valor2 = parseInt(prompt("dame el segundo numero"));
resultado = valor1 + valor2;
alert(`la suma de ${valor1} y ${valor2} es ${resultado}`);
console.log (`la suma de ${valor1} y ${valor2} es ${resultado}`);

//Ejercicio 7
let edad = parseInt(prompt("Por favor ingresa tu edad"));
if (edad >= 18) {
    prompt("Eres mayor de edad, ponte a trabajar"); 
} else {
    prompt("Eres menor de edad, ponte a estudiar");
}

//Ejercicio 8
let validadTuNumero = parseInt(prompt("Por favor ingresa un numero y validamos si es positivo o negativo"));
if (validadTuNumero < 0) {
    alert(`El numero ingresado ${validadTuNumero} es Negativo`);
} else if (validadTuNumero > 0) {
    alert(`El numero ingresado ${validadTuNumero} es Positivo`);
} else if (validadTuNumero == 0) {
    alert(`El numero ingresado ${validadTuNumero} es igual a 0`);
}

//Ejercicio 9
let valor3 = 1
while (valor3 <=10) {
    console.log(valor3);
    valor3++;
}

//Ejercicio 10
nota = 8; 
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//Ejercicio 11
numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Ejercicio 12
numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroIntAleatorio);

//Ejercicio 13
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);