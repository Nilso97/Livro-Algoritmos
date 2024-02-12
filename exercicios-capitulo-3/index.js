var count = 0;
/**
 * Recursividade
 * @param index
 * @returns
 */
var regressiveFunction = function (index) {
    if (index <= 1)
        return;
    count += 1;
    regressiveFunction(index - 1);
};
regressiveFunction(10);
console.log("A fun\u00E7\u00E3o regressiva 'regressiveFunction()' executou ".concat(count, " vezes"));
/**
 * Pilha de Chamada c/ Recursividade
 * @param x
 * @returns
 */
var fatorial = function (x) {
    if (x === 1)
        return 1;
    return x * fatorial(x - 1);
};
var calcFatorial = fatorial(5);
console.log("Resultado: ".concat(calcFatorial));
