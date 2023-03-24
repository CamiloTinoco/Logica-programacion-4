let numero;

let primerNumero = 0;
let segundoNumero = 1; 
numero = prompt("ingresa un número");

console.log(primerNumero);
if (isNaN(numero)) {
    alert("Ingrese un numero");

} else{
    for (let i = 0; i < numero; i++) {
        const siguienteNumero = primerNumero + segundoNumero;
       
       primerNumero = segundoNumero;
       segundoNumero = siguienteNumero;
   console.log( siguienteNumero);
   }
}

