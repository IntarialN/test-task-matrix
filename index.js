// Рандомные числа от -100 до 100
function getRandomNumber() {
    return Math.floor(Math.random() * 201) - 100;
}

// Создание матрицы 10x10
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

// Находим минимальный элемент с его позицией
// P.S. в задаче не указано, что делать если встречается два одинаковых
// наименьших числа в разных строках, поэтому сохраняю первое попавшееся
function findMinElement(matrix) {
    let min = matrix[0][0];
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

// Поиск наименьшего числа в строке
function findSmallPositiveNumber(row) {
    const numbers = row.filter(elem => elem > 0);
    return numbers.length ? Math.min(...numbers) : null;
}

// Подсчет сколько нужно заменить числе, чтобы не было 3-и подряд положительных или отрицательных
function getCountReplacements(row) {
    let replacementsNeeded = 0;
    let index = 0;

    while (index < row.length - 2) {
        const a = row[index];
        const b = row[index + 1];
        const c = row[index + 2];

        const allPositive = a > 0 && b > 0 && c > 0;
        const allNegative = a < 0 && b < 0 && c < 0;

        if (allPositive || allNegative) {
            replacementsNeeded++;
            index += 3; // ломаем последовательность
        } else {
            index++;
        }
    }

    return replacementsNeeded;
}

function printMatrix(matrix, minValueInfo) {
    console.log(`\n`)

    matrix.forEach((row, rowIndex) => {
        const rowIsMin = rowIndex === minValueInfo.row;
        const smallestPositive = findSmallPositiveNumber(row);

        const mark = rowIsMin ? '*' : '-';

        const rowNumber = String(rowIndex + 1).padStart(2);
        const rowValues = row.map(n => String(n).padStart(5)).join('');
        const positive = String(smallestPositive).padStart(3);

        console.log(`${mark} Строка ${rowNumber}: ${rowValues} | Минимальное положительное: ${positive ?? '-'} | Нужно заменить: ${getCountReplacements(row)}`);
    });

    console.log(`\nМинимальное число в матрице: ${minValueInfo.value} (строка ${minValueInfo.row + 1}, столбец ${minValueInfo.col + 1})\n`);
}

const matrix = createMatrix();
const minValue = findMinElement(matrix);

printMatrix(matrix, minValue);
