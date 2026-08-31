export interface Veiculo {
  obterDescricao(): string;
}

export class Carro implements Veiculo {
  public modelo: string;
  public portas: number;

  constructor(modelo: string, portas: number) {
    this.modelo = modelo;
    this.portas = portas;
  }

  obterDescricao(): string {
    return `Carro ${this.modelo} com ${this.portas} portas`;
  }
}

export class Moto implements Veiculo {
  public marca: string;
  public cilindradas: number;

  constructor(marca: string, cilindradas: number) {
    this.marca = marca;
    this.cilindradas = cilindradas;
  }

  obterDescricao(): string {
    return `Moto ${this.marca} com ${this.cilindradas}cc`;
  }
}
