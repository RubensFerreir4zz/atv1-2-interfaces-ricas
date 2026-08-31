import { Carro, Moto, type Veiculo } from './veiculo.js';

test('6.5 deve instanciar as classes, alterar atributos e testar o método comum da interface', () => {
  const meuCarro: Veiculo = new Carro('Sedan', 4);
  const minhaMoto: Veiculo = new Moto('Yamaha', 250);

  expect(meuCarro.obterDescricao()).toBe('Carro Sedan com 4 portas');
  expect(minhaMoto.obterDescricao()).toBe('Moto Yamaha com 250cc');

  (meuCarro as Carro).modelo = 'Hatch';
  (meuCarro as Carro).portas = 2;

  (minhaMoto as Moto).marca = 'Honda';
  (minhaMoto as Moto).cilindradas = 600;

  expect(meuCarro.obterDescricao()).toBe('Carro Hatch com 2 portas');
  expect(minhaMoto.obterDescricao()).toBe('Moto Honda com 600cc');
});
