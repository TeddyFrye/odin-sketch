const container = document.querySelector('#container');

const border = document.createElement('div');
container.appendChild(border);
for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.dataset.darkness = 0;
        row.appendChild(gridSquare);
    }
    container.appendChild(row);
}
function darkenSquare(e) {
    const darkness = parseInt(e.target.dataset.darkness) + 30;
    e.target.style.backgroundColor = `hsl(0, 0%, ${100 - darkness}%)`;
    e.target.dataset.darkness = darkness;
  }
const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => {
    square.addEventListener('mouseover', darkenSquare);
});
/*
rockBtn.addEventListener('mouseover', function() {
    rockBtn.style.backgroundColor = 'lightgray';
});
*/