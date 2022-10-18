import { mezclarArreglos } from './1erPunto';

describe ('testing 1erPunto functions', () => {
    test('testing punto 1', () => {
        expect(primerPunto([])).toEqual({});
    });
});

test('testeando componente funciones', () => {
    test('renderiza el texto del boton', () => {
        const resultado = punto1();
        expect(resultado).toBe(3);
    });
});

test('suma 1 + 2 es igual a 3', () => {
    const resultado = suma(1, 2);
    expect(resultado).toBe(3);
});