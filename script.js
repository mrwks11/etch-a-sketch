// First time input
let rowsInput = 16;
let colsInput = 16;

const container = document.getElementById('container');

// Create a (rows * cols) grid
function createGrid(rows, cols) {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let createCell = document.createElement('div');
        createCell.classList.add('cell');
        container.appendChild(createCell);
    }

    // Select hovered element and change background color
    const allCells = document.querySelectorAll('.cell');
    Array.from(allCells).forEach(e => e.addEventListener('mouseover', function() {
        // e.style.background = 'black';
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.style.background = `#${randomColor}`;

    }));

}

createGrid(rowsInput, colsInput);

const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    container.innerHTML = '';
    rowsInput = prompt('How many rows?');
    colsInput = prompt('How many columns?');
    createGrid(rowsInput, colsInput);
 });