function clearGrid() {
  let btn = document.querySelector('.btn');
  btn.addEventListener('click', function(e) {
    let input = prompt("How many squares per side to make the new grid?");
    deleteGrid();
    createGrid(input);
    })
}

function deleteGrid() {
  let container = document.querySelector('#container');
  Element.prototype.removeAll = function () {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
    return this;
  }
  container.removeAll();
}
                       
function createGrid(size) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let boxSize = 320 / size;
      let div = document.createElement('div');
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      div.style.float = 'left';
      div.style.border = '1px dashed black';
      div.style.boxSizing = 'border-box';
      let container = document.getElementById('container');
      container.appendChild(div);
      div.addEventListener('mouseover', addRandomBackgroundColor);
    }
  }
}

function addRandomBackgroundColor(e) {
  e.target.style.backgroundColor = randomColor();
}

function randomColor() {
  return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
}

function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max)); //The maximum is exclusive
}

createGrid(16);
clearGrid();