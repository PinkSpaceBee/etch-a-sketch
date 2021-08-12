let container = document.querySelector('.container');
let gridCell;

for(let i = 0; i < 256; i++) {
    gridCell = document.createElement('div');
    container.appendChild(gridCell);
}

//let cells = container.children;
let cells = Array.from(container.children);

cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.background = 'rgba(255, 135, 135, 1)';
}))


