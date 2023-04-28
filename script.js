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


//Clearing the Tablet with a Button
function clearGrid(){
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.style.backgroundColor = `hsl(0,0%,${100}%)`;
    square.dataset.darkness = 0;
})
}

const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear Grid';
clearBtn.addEventListener('click',clearGrid);

const buttonContainer = document.querySelector('#button-container');
container.appendChild(clearBtn);

/*Chat's code:
function clearGrid() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      square.style.backgroundColor = 'hsl(0, 0%, 100%)';
      square.dataset.darkness = 0;
    });
  }
  
  // Adding a Clear Button
  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear Grid';
  clearBtn.addEventListener('click', clearGrid);
  
  const buttContainer = document.querySelector('#button-container');
  buttContainer.appendChild(clearBtn);
  */