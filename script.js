let container = document.querySelector('.js-container');
let gridSize = document.querySelector('#js-grid-slider');
let thumbValue = document.querySelector('#js-thumb-value');
let resetBtn = document.querySelector('#js-reset-btn');
let gridCell;
let colNum = gridSize.value;
let cells;

function createGrid() {
    document.documentElement.style.setProperty('--colNum', colNum);

    for (let i = 0; i < colNum ** 2; i++) {
        gridCell = document.createElement('div');
        container.appendChild(gridCell);
    }
    setGridSize();
}
createGrid();

function setHoverEffect() {
   cells = Array.from(container.children);
   cells.forEach(cell => cell.addEventListener('mouseover', () => {
       cell.style.backgroundColor = 'rgba(255, 135, 135, 1)';
   }))
}
setHoverEffect();


function setGridSize() {
    gridSize.addEventListener('change', () => {
        thumbValue.textContent = `${gridSize.value}x${gridSize.value}`;
    })
}
//setGridSize();


function resetGrid() {
    cells.forEach(cell => cell.remove());
}

resetBtn.addEventListener('click', () => {
    resetGrid();
    createGrid();
})