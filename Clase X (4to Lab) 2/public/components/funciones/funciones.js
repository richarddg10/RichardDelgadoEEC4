/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
const letras = ['h', 'a', 'c'];
const numeros1 = [7, 4, 17, 10, 48];
export const mezclarArreglos = (letras, numeros1) => {
    const [l, n] = numeros1.length > letras.length ? [letras, numeros1] : [numeros1, letras];
    return Array.from({
        length: l.length * 4
    }).map((_, i) => i % 2 == 0 ? l[i / 2] : n[Math.ceil(i / 2) - 1]).filter(el => el);
};
console.log(mezclarArreglos(letras, numeros1));
//module.exports = mezclarArreglos;
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
const arregloDosListas = () => {
    const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const resultado = [];
    for (let i = 1; i < numeros2.length; i++) {
        if (numeros2[i] % 2 == 1) {
            resultado.push(i);
        }
    }
    return resultado;
};
console.log(arregloDosListas());
/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */
const letras1 = ['e', 'd', 'f'];
const letras2 = ['a', 'c', 'b'];
const letras3 = ['m', 'o', 'n'];
const letrasOrdenadas = letras1.concat(letras2, letras3);
const ordenarLetras = (nuevoOrden) => {
    const ordenado = [];
    nuevoOrden.sort();
    for (let i = 0; i < nuevoOrden.length; i++) {
        const element = nuevoOrden[i];
        ordenado.push(element);
    }
    return ordenado;
};
console.log(ordenarLetras(letrasOrdenadas));
/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */
const palabrasRepetidas = (lista1, lista2) => {
    const listaNueva = lista1.filter(element => lista2.includes(element));
    return listaNueva;
};
console.log(palabrasRepetidas);
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
const elementos1 = [1, 4, 6, 7, 8];
const elementos2 = [2, 4, 5, 6, 7];
const comprobarInfo = (elementos1, elementos2) => {
    elementos1.sort();
    elementos2.sort();
    if (elementos1.length == elementos2.length && elementos1.every(function (i, j) { return i === elementos2[j]; })) {
        return 'Son iguales';
    }
    else {
        return 'No son iguales';
    }
};
console.log(comprobarInfo(elementos1, elementos2));
/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */
const listaNumerosLetras = ['b', 6, 'a', 'q', 7, 2];
function ordenadora(listaNumerosLetras) {
    let arreglo = listaNumerosLetras;
    const listaOrganizada = [];
    listaNumerosLetras = listaNumerosLetras.filter(number => Number.isInteger(number));
    arreglo = arreglo.filter(string => !Number.isInteger(string));
    listaNumerosLetras.sort();
    arreglo.sort();
    arreglo.forEach(element => {
        listaOrganizada.push(element);
    });
    listaNumerosLetras.forEach(element => {
        listaOrganizada.push(element);
    });
    return listaOrganizada;
}
console.log(ordenadora(listaNumerosLetras));
/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= n.length; i = i + 1) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }
    else if ((i % 3 == 0)) {
        console.log('Fizz');
    }
    else if ((i % 5) == 0) {
        console.log('Buzz');
    }
    else {
        console.log('...');
    }
}
/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */
const opcionesIdeas = (mensajes) => {
    if (mensajes.includes('Buena') == true) {
        return ('publicar, fantastico');
    }
    else {
        return ('fallo');
    }
};
console.log(opcionesIdeas);
const factorial = (n) => {
    if (n === 1)
        return 1;
    factorial(1);
    return n * factorial(n - 1);
};
console.log(factorial(10));
/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */
const lanzarDados = (sumar) => {
    const dado1 = Math.floor(Math.random() * 6);
    const dado2 = Math.floor(Math.random() * 6);
    for (let index = 1; index < 12; index++) {
        if (dado1 + dado2 == index) {
            sumar[index] = +1;
        }
    }
    return sumar;
};
//console.log(lanzarDados());
