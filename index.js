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
