function createGrid(size) {
    const grid = document.querySelector(".grid");
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

createGrid(16);
hovering();

const sizeBtn = document.querySelector("#size")
sizeBtn.addEventListener("click", () => {
    let userInput = prompt("Enter desired size of the grid (between 1 and 100):");
    if (userInput == null) return;
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });
    if (userInput < 0) createGrid(1);
    else if (userInput > 100) createGrid(100);
    else createGrid(userInput);
    hovering();
});

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

function hovering() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}