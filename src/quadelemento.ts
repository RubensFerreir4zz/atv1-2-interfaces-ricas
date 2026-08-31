
export const quadradoComFor = (array: number[]): number[] => {
  const resultado: number[] = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] ** 2);
  }
  return resultado;
}

export const quadradoComForEach = (array: number[]): number[] => {
  const resultado: number[] = [];
  array.forEach((elemento) => {
    resultado.push(elemento ** 2);
  });
  return resultado;
}