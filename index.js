function getRandomNumber() {
    return Math.floor(Math.random() * 201) - 100;
}

function createMatrix(rows = 10, columns = 10) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(getRandomNumber());
        }
        matrix.push(row);
    }

    return matrix;
}

function findMinElement(matrix) {
    let min = Infinity; // matrix[0][0]
    let minRowIndex = 0;
    let minColIndex = 0;

    matrix.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            if (value < min) {
                min = value;
                minRowIndex = rowIndex;
                minColIndex = colIndex;
            }
        });
    });

    return {
        value: min,
        row: minRowIndex,
        col: minColIndex
    };
}

const matrix = createMatrix();
const minValueInfo = findMinElement(matrix);

console.log({ minValueInfo })
