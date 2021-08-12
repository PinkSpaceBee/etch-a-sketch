let container = document.querySelector('.js-container');
let gridCell;
let resetButton = document.querySelector('#js-reset-button');
let cells;

function createGrid() {
    for(let i = 0; i < 256; i++) {
        gridCell = document.createElement('div');
        container.appendChild(gridCell);
        hoverEffect();
    }
}
createGrid();

function removeGrid() {
    cells.forEach(cell => cell.remove());
}

function hoverEffect() {
    cells = Array.from(container.children);
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.background = 'rgba(255, 135, 135, 1)';
    }))
}

resetButton.addEventListener('click', () => {
    removeGrid();
    createGrid();
})





