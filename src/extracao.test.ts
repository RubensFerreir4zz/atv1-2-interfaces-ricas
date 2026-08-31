import { extrairPrimeirosDois } from './extracao.js';

test('4.1 deve extrair apenas os dois primeiros elementos utilizando slice', () => {
  const arrayEntrada = [2, 4, 6, 2, 8, 9, 5];
  const resultadoEsperado = [2, 4];

  expect(extrairPrimeirosDois(arrayEntrada)).toEqual(resultadoEsperado);
});
