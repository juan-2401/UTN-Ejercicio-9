/* Parte 1 */

var usuario = "administrador";
var password = 1234;

function parte1(){
    usuario = prompt("Ingrese su usuario:");
    password = prompt("Ingrese su contraseña:");
        if (usuario == "administrador" && password == 1234){
            alert("Bienvenido");
        } else{
            alert("Usuario o contraseña incorrectos");
        }
}

/* Parte 2 */

function parte2(){

    var maximo;
    var minimo;

    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);
 
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
        alert("Debe ingresar tres números");
    } else {
        maximo = Math.max(numero1, numero2, numero3);
        console.log("El mayor número es: " + maximo);

        minimo = Math.min(numero1, numero2, numero3);
        console.log("El menor número es: " + minimo);

        document.getElementById("resultado-parte-2").innerHTML = "El mayor número es " + maximo + " y el menor número es " + minimo + ".";
    }
}

/* Parte 3 */

var mensaje = "Hola Mundo";

function parte3(){
    document.getElementById("resultado-parte-3").innerHTML = mensaje;
    console.log(mensaje);
}