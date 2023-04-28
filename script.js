const container = document.querySelector('#container');

const border = document.createElement('div');

numRow = 16
numColumn = numRow
container.appendChild(border);
for (let i = 0; i < numRow; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < numColumn; j++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.dataset.darkness = 0;
        row.appendChild(gridSquare);
    }
    container.appendChild(row);
}
function darkenSquare(e) {
    const darkness = parseInt(e.target.dataset.darkness) + 30;
    e.target.style.backgroundColor = `hsl( 0, 0%, ${100 - darkness}%)`;
    e.target.dataset.darkness = darkness;
  }
const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => {
    square.addEventListener('mouseover', darkenSquare);
});
//ReSizing the Grid
function reSize (){
    let wantSize = parseInt(prompt("How many squares per side would you like?"));
    clearGrid();
    numRow = wantSize;
    numColumn = wantSize;
    container.innerHTML = '';
    for (let i = 0; i < numRow; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < numColumn; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.dataset.darkness = 0;
            row.appendChild(gridSquare);
        }
        container.appendChild(row);
    }
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      square.addEventListener('mouseover', darkenSquare);
    });
  }
const sizeBtn = document.createElement('button');
sizeBtn.textContent = 'How many squares would you like?';
sizeBtn.addEventListener('click', reSize);

document.body.appendChild(sizeBtn);
//Clearing the Tablet with a Button
function clearGrid(){
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      square.style.backgroundColor = `hsl(40, 56%, 76%)`;
      square.dataset.darkness = 0;
    });
    shake(container);
  }
  
  
  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear Grid';
  clearBtn.addEventListener('click',clearGrid);
  document.body.appendChild(clearBtn);
  
//Shaking animation
const shakeElements = [];

function shake(container, magnitude = 16, angular = false) {
  var tiltAngle = 1;
  var counter = 1;
  var numberOfShakes = 15;
  var startX = 0, startY = 0, startAngle = 0;
  var magnitudeUnit = magnitude / numberOfShakes;

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (shakeElements.indexOf(container) === -1) {
    shakeElements.push(container);

    container.updateShake = function() {
      if (angular) {
        angularShake();
      } else {
        upAndDownShake();
      }
    };
  }

  function upAndDownShake() {
    if (counter < numberOfShakes) {
      container.style.transform = `translate(${startX}px, ${startY}px)`;
      magnitude -= magnitudeUnit;
      var randomX = randomInt(-magnitude, magnitude);
      var randomY = randomInt(-magnitude, magnitude);
      container.style.transform = `translate(${randomX}px, ${randomY}px)`;
      counter += 1;
      requestAnimationFrame(upAndDownShake);
    }

    if (counter >= numberOfShakes) {
      container.style.transform = `translate(${startX}px, ${startY}px)`;
      shakeElements.splice(shakeElements.indexOf(container), 1);
    }
  }

  function angularShake() {
    if (counter < numberOfShakes) {
      container.style.transform = `rotate(${startAngle}deg)`;
      magnitude -= magnitudeUnit;
      var angle = Number(magnitude * tiltAngle).toFixed(2);
      container.style.transform = `rotate(${angle}deg)`;
      counter += 1;
      tiltAngle *= -1;
      requestAnimationFrame(angularShake);
    }

    if (counter >= numberOfShakes) {
      container.style.transform = `rotate(${startAngle}deg)`;
      shakeElements.splice(shakeElements.indexOf(container), 1);
    }
  }

  container.updateShake();
}
