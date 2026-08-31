import { quadradoComFor, quadradoComForEach } from './quadelemento.js';

const arrayEntrada = [3, 5, 7, 3, 8, 9, 1];
const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

test('1.a) deve calcular o quadrado dos elementos iterando com "for" simples', () => {
  expect(quadradoComFor(arrayEntrada)).toEqual(resultadoEsperado);
});

test('1.b) deve calcular o quadrado dos elementos iterando com "forEach"', () => {
  expect(quadradoComForEach(arrayEntrada)).toEqual(resultadoEsperado);
});


