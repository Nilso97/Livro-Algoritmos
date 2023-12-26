function printFirst(items) {
    console.log(items[0]); // Big O(1)
    for (var i = 0; i < items.length; i++) { // Big O(n) n = quantidade de items
        console.log(items[i]); // Big O(1)
    }
    for (var i = items.length - 1; i >= 0; i--) { // Big O(n)
        console.log(items[i]);
    }
    items.reverse().map(function (item) {
        console.log(item);
    });
}
function findElement(matrix, target) {
    var rows = matrix.length;
    var column = matrix[0].length;
    // Big O(n) ou Big o(linhas * colunas)
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < column; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}
var items = ["John", "Doe"];
printFirst(items);
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var target = 5;
var result = findElement(matrix, target);
console.log("O elemento ".concat(target, " foi encontrado na matriz? ").concat(result));
