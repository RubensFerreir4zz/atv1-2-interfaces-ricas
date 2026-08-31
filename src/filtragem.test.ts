import { filtrarPares } from './filtragem.js';

test('5.1 deve extrair apenas os elementos pares utilizando filter', () => {
  const arrayEntrada = [8, 3, 9, 5, 6, 12];
  const resultadoEsperado = [8, 6, 12];

  expect(filtrarPares(arrayEntrada)).toEqual(resultadoEsperado);
});
