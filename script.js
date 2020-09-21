// create and add 16x16 divs
const container = document.getElementById('container');

function createGrid(rows, cols) {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let createCell = document.createElement('div');
        createCell.classList.add('cell');
        // createCell.classList.add(c);
        // cell.innerText = c + 1;
        container.appendChild(createCell);
    }
}

createGrid(16, 16);

// select hovered element and change background color
const cell = document.querySelectorAll('.cell');
Array.from(cell).forEach(e => e.addEventListener('mouseover', function() {
    e.style.background = 'blue';
  }));

/*
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    let rowsInput = prompt('How many rows?');
    let colsInput = prompt('How many columns?');
    createGrid(rowsInput, colsInput);
 })
 */