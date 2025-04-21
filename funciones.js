// Función que determina si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Función que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función que devuelve el mayor de dos números
function mayorDeDos(n1, n2) {
    return (n1 > n2) ? n1 : n2;
}

// Función que convierte minutos a una cadena de horas y minutos
function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${horas} hora${horas !== 1 ? 's' : ''} y ${mins} minuto${mins !== 1 ? 's' : ''}`;
}

// Función que determina si un número está dentro de un rango (inclusive)
function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}

// Función que calcula el precio final con un descuento dado (en porcentaje)
function calcularPrecioFinal(precioInicial, descuento) {
    const descuentoDecimal = descuento / 100;
    return precioInicial - (precioInicial * descuentoDecimal);
}

// Función que determina si una persona puede votar según su edad (>= 18)
function puedeVotar(edad) {
    return edad >= 18;
}

// Función que calcula el área de un triángulo con base y altura
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Pruebas
console.log(esBisiesto(2024)); // true
console.log(celsiusAFahrenheit(0)); // 32
console.log(mayorDeDos(5, 8)); // 8
console.log(convertirMinutos(130)); // "2 horas y 10 minutos"
console.log(estaEnRango(10, 5, 15)); // true
console.log(calcularPrecioFinal(100, 20)); // 80
console.log(puedeVotar(17)); // false
console.log(calcularAreaTriangulo(5, 10)); // 25
