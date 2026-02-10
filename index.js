//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
const PRECIO_BASE = 2000

//Valores de los recargos
const EDAD_18 = 0.1 // 10%
const EDAD_25 = 0.2 // 20%
const EDAD_50 = 0.3 // 30%

const CASADO_18 = 0.1 // 10%
const CASADO_25 = 0.2 // 20%
const CASADO_50 = 0.3 // 30%

const RECARGO_HIJOS = 0.2 // 20%


//Recargo
var recargo_asegurado = 0
var recargo_conyuge= 0
var recargo_hijos = 0
var recargo_total = 0

//Precio final
var precio_final = 0

//Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "))

//Validamos que la respuesta sea número únicamente
while(isNaN(edad) || edad < 18){

    if(isNaN(edad)){
        alert("Debe de ingresar numeros unicamente")
    } else if(edad < 18){
        alert("Lo sentimos, debe ser mayor de edad (18+) para contratar un seguro.");
    }

    edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "))

}


var casado = prompt("¿Está casado actualmente?")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge = 0
if("SI" === casado.toUpperCase()){
    edad_conyuge = parseInt(prompt("¿Que edad tiene su cónyuge?"))

    //Nos aseguramos que ingrese únicamente numero
    while(isNaN(edad_conyuge) || edad_conyuge < 18){
        if(isNaN(edad_conyuge)){
            alert("Debe de ingresar numeros unicamente")
        } else if(edad_conyuge < 18) {
            alert("Su cónyuge debe de ser mayor de edad")
        }

        edad_conyuge = parseInt(prompt("¿Que edad tiene su cónyuge?"))
    }
}

var hijos = prompt("¿Tiene hijos o hijas?")

//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0
if("SI" === hijos.toUpperCase()){
    cantidad_hijos = parseInt(prompt("Por favor indique la cantidad de hijos que tiene"))

    //Nos aseguramos que ingrese únicamente numero
    while(isNaN(cantidad_hijos) || cantidad_hijos <= 0){

        if(isNaN(cantidad_hijos)){
            alert("Ingrese solo el numero de hijos que tiene")
        } else if(cantidad_hijos <= 0){
            alert("La cantidad debe de ser mayor o igual a 1")
        }

        cantidad_hijos = parseInt(prompt("Por favor indique la cantidad de hijos que tiene"))
    }

}

/**
 * 1. convierta la cantidad de hijos a número
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Calculo Recargo por edad
if ( edad >= 18 && edad <= 24){
    recargo_asegurado = PRECIO_BASE * EDAD_18
} else if( edad >= 25 && edad <= 49){
    recargo_asegurado = PRECIO_BASE * EDAD_25
} else {
    recargo_asegurado = PRECIO_BASE * EDAD_50
}

    recargo_total = recargo_total + recargo_asegurado

/**
 * 2. Recargo por la edad del conyuge
 */
// Calculo Recargo por conyuge
if (casado.toUpperCase() === "SI"){
    if(edad_conyuge >= 18 && edad_conyuge <= 24){
        recargo_conyuge = PRECIO_BASE * CASADO_18
    } else if( edad_conyuge >= 25 && edad_conyuge <=49){
        recargo_conyuge = PRECIO_BASE * CASADO_25
    } else {
        recargo_conyuge = PRECIO_BASE * CASADO_50
    }

    recargo_total = recargo_total + recargo_conyuge
}

/**
 * 3. Recargo por la cantidad de hijos
 */
//Recargo por hijos
if(hijos.toUpperCase() === "SI"){

    recargo_hijos = (PRECIO_BASE * RECARGO_HIJOS) * cantidad_hijos
    recargo_total = recargo_total + recargo_hijos
}

precio_final = PRECIO_BASE + recargo_total

//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

