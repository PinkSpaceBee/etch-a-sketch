let container = document.querySelector('.js-container');
let gridCell;
let resetButton = document.querySelector('#js-reset-button');
let cells;
let slider = document.querySelector('#js-slider');
let sliderValue = document.querySelector('#js-slider-value');
let count;
let xy = 4 * 5;

function createGrid() {
    for(let i = 0; i < xy; i++) {
        gridCell = document.createElement('div');
        container.appendChild(gridCell);
        hoverEffect();
    }
}
createGrid();

let value = document.querySelector('#js-slider-value');
slider.addEventListener('change', () => {
    count = slider.value;

    value.textContent = `${count}x${count}`;
    //slider.textContent = count;
})

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
    




