// global variables 
const DEFAULTSIZE = 16;
const DEFAULTCOLOR = "black";
// Keep track of current size and color 
let currentSize = DEFAULTSIZE;
let currentColor = DEFAULTCOLOR;

// getting a reference to the nodes in the DOM 
const color = document.querySelector('.selectColor');
const grid = document.querySelector('.grid');
const buttonSixteen = document.querySelector('.size-16');
const buttonThirtyTwo = document.querySelector('.size-32');
const buttonSixtyFour = document.querySelector('.size-64');
const reset = document.querySelector('.reset');


buttonSixteen.addEventListener('click', (event) => {
    currentSize = parseInt(event.target.id);
    reloadGrid(currentSize);
});

buttonThirtyTwo.addEventListener('click', (event) => {
    currentSize = parseInt(event.target.id);
    reloadGrid(currentSize);
});

buttonSixtyFour.addEventListener('click', (event) => {
    currentSize = parseInt(event.target.id);
    reloadGrid(currentSize);
});

reset.addEventListener('click', resetGrid);

color.addEventListener('input', (event) => {
    currentColor = event.target.value;
    setColor(currentColor);
});

// set color 
function setColor(newColor)
{
    currentColor = newColor;
}

// resetting grid 
function resetGrid()
{
    clearGrid();
    setGrid(currentSize);
}
// reloading the grid
function reloadGrid(size)
{
    clearGrid();
    setGrid(size);
}

// clearing the grid 
function clearGrid() 
{
    grid.innerHTML = '';
}

// changing the color 
function changeColor (event) 
{
    event.target.style.backgroundColor = currentColor;
}

// setting up the grid
function setGrid(size) 
{
    totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) 
    {
        const squares = document.createElement('div');
        squares.classList.add('grid-squares');
        grid.appendChild(squares);
    }

    let squares = document.querySelectorAll('.grid-squares');
    squares.forEach(square => {
        square.style.width = 512 / size + "px";
        square.style.height = 512 / size + "px";
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid rgba(0, 0, 0, 0.5)';
        square.addEventListener('click', changeColor);
    });
}


window.onload = () => 
{
    setGrid(DEFAULTSIZE);
}