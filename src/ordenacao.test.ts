import { ordenarDecrescente } from './ordenacao.js';

test('3.1 deve ordenar os elementos em ordem decrescente utilizando sort', () => {
  const arrayEntrada = ['carro', 'boneco', 'ave', 'lapis'];
  const resultadoEsperado = ['lapis', 'carro', 'boneco', 'ave'];

  expect(ordenarDecrescente(arrayEntrada)).toEqual(resultadoEsperado);
});
