const container = document.querySelector('#container');

const border = document.createElement('div');
container.appendChild(border);
for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        row.appendChild(gridSquare);
    }
    container.appendChild(row);
}