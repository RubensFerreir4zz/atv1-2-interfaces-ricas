import { concatenarComJoin } from './concatstring.js';

test('2.1 deve concatenar as strings com 1 espaço utilizando join', () => {
  const arrayEntrada = ['Arrays', 'com', 'TypeScript'];
  const resultadoEsperado = 'Arrays com TypeScript';

  expect(concatenarComJoin(arrayEntrada)).toBe(resultadoEsperado);
});

