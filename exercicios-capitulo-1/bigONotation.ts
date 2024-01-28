function printFirst(items: string[]): void {
    console.log(items[0]); // Big O(1)

    for (let i = 0; i < items.length; i++) { // Big O(n) n = quantidade de items
        console.log(items[i]); // Big O(1)
    }

    for (let i = items.length - 1; i >= 0; i--) { // Big O(n)
        console.log(items[i]);
    }

    items.reverse().map((item: string) => { // Big O(n)
        console.log(item);
    })
}

function findElement(matrix: Array<number[]>, target: number): boolean {
    let rows = matrix.length;
    let column = matrix[0].length;

    // Big O(n) ou Big o(linhas * colunas)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}

var items: string[] = ["John", "Doe"];
printFirst(items);

var matrix: Array<number[]> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var target = 5;
var result = findElement(matrix, target);
console.log(`O elemento ${target} foi encontrado na matriz? ${result}`);