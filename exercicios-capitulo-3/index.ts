let count: number = 0;

/**
 * Recursividade
 * @param index
 * @returns
 */
const regressiveFunction = (index: number): void => {
  if (index <= 1) return;

  count += 1;
  regressiveFunction(index - 1);
};

regressiveFunction(10);
console.log(
  `A função regressiva 'regressiveFunction()' executou ${count} vezes`
);

/**
 * Pilha de Chamada c/ Recursividade
 * @param x
 * @returns
 */
const fatorial = (x: number): number => {
  if (x === 1) return 1;

  return x * fatorial(x - 1);
};

let calcFatorial = fatorial(5);
console.log(`Resultado: ${calcFatorial}`);
