let gridDim = 16;

function createSquares(gridDim) {
    for (let i = 0; i < Math.pow(gridDim, 2); i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
    
        document.getElementById("sketchCont").append(gridSquare);
    }
}

function addListeners() {
    let gridSquareListener = document.querySelectorAll(".gridSquare");
    gridSquareListener.forEach((block) => {
        block.addEventListener("mouseover", function squareOn(e) {
            if (e.buttons == 1) {
                e.target.classList.add("gridSquareOn");
            }
        });
      });
}

function removeGrid() {
    let gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach((block) => {
        block.remove();
    })
}

function resizeSquares() {
    let gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach((block) => {
        block.style.minWidth = `calc(100% / ${gridDim})`;
        block.style.minHeight = `calc(100% / ${gridDim})`;
    })
}

createSquares(gridDim);
addListeners();

function refreshBoard()
{
    let ddl = document.getElementById("gridSelection");
    let selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue == "16")
   {
        gridDim = 16;
   }
   else if (selectedValue == "32") {
        gridDim = 32;
   }
   else if (selectedValue == "64") {
        gridDim = 64;
   }
   else if (selectedValue == "128") {
        gridDim = 128;
   }
    removeGrid();
    createSquares(gridDim);
    resizeSquares();
    addListeners();
}