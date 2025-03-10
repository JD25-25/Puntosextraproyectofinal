// Variables útiles
// Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

// Valores de los recargos
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final
var precio_final = 0;

// Mensajes de alerta para ingresar datos
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");

// Convertimos la edad ingresada a número
var edad_numero = parseInt(edad);

// Validación de mayoría de edad
if (edad_numero < 18) {
alert("Lo sentimos, debe ser mayor de edad para cotizar un seguro.");
} else {
var casado = prompt("¿Está casado actualmente?");
var edad_conyuge = 0;
var edad_conyuge_numero = 0;

// Comprobamos la edad del cónyuge si está casado/a
if ("SI" == casado.toUpperCase()) {
edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("¿Tiene hijos o hijas?");
var cantidad_hijos = 0;

// Comprobamos la cantidad de hijos solamente si los tienen
if ("SI" == hijos.toUpperCase()) {
cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
}

// Cálculo del recargo total basado en las respuestas ingresadas

// Recargo por edad del asegurado
if (edad_numero >= 18 && edad_numero < 25) {
recargo_total += precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50) {
recargo_total += precio_base * edad_25;
} else if (edad_numero >= 50) {
recargo_total += precio_base * edad_50;
}

// Recargo por la edad del cónyuge
if ("SI" == casado.toUpperCase()) {
if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
recargo_total += precio_base * casado_18;
} else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
recargo_total += precio_base * casado_25;
} else if (edad_conyuge_numero >= 50) {
recargo_total += precio_base * casado_50;
}
}

// Recargo por la cantidad de hijos
if (cantidad_hijos > 0) {
recargo_total += (precio_base * hijos_recargo) * cantidad_hijos;
}

// Cálculo del precio final
precio_final = precio_base + recargo_total;

// Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: " + recargo_total);
alert("El precio final será de: " + precio_final);
}


// Variables 
var precio_base = 2000;
var edad_18 = 0.1; 
var edad_25 = 0.2; 
var edad_50 = 0.3;
var casado_18 = 0.1; 
var casado_25 = 0.2; 
var casado_50 = 0.3;
var hijos_recargo = 0.2; 
var propiedad_recargo = 0.35; 
var ingreso_recargo = 0.05;

//noprotect

while (true) {
  var nombre = prompt("Ingrese su nombre (o escriba 'Salir' para terminar):");
  if (nombre.toUpperCase() == "SALIR") break;

  var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solo números:"));
  if (edad < 18) {
    alert("Debe ser mayor de edad para cotizar.");
    continue;
  }

  var casado = prompt("¿Está casado actualmente? (Si/No)").toUpperCase();
  var edad_conyuge = 0;
  if (casado == "SI") {
    edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
  }

  var hijos = prompt("¿Tiene hijos o hijas? (Si/No)").toUpperCase();
  var cantidad_hijos = (hijos == "SI") ? parseInt(prompt("¿Cuántos hijos tiene?")) : 0;
  
  var propiedades = parseInt(prompt("¿Cuántas propiedades posee? Ingrese solo números:"));
  var ingresos = parseFloat(prompt("Ingrese su ingreso mensual en quetzales:"));

  var recargo_total = 0;

  if (edad >= 18 && edad < 25) recargo_total += precio_base * edad_18;
  else if (edad >= 25 && edad < 50) recargo_total += precio_base * edad_25;
  else if (edad >= 50) recargo_total += precio_base * edad_50;

  if (casado === "SI") {
    if (edad_conyuge >= 18 && edad_conyuge < 25) recargo_total += precio_base * casado_18;
    else if (edad_conyuge >= 25 && edad_conyuge < 50) recargo_total += precio_base * casado_25;
    else if (edad_conyuge >= 50) recargo_total += precio_base * casado_50;
  }

  recargo_total += (precio_base * hijos_recargo) * cantidad_hijos;
  recargo_total += (precio_base * propiedad_recargo) * propiedades;
  recargo_total += ingresos * ingreso_recargo;

  var precio_final = precio_base + recargo_total;
  
  alert("Para el asegurado " + nombre);
  alert("El recargo total será de: " + recargo_total);
  alert("El precio final será de: " + precio_final);
}




