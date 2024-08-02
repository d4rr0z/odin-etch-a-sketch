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

function changeSize() {
    let userInput = prompt("Enter desired size of the grid (between 1 and 100):");
    if (userInput > 0 && userInput < 101) {
        const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            row.remove();
        });
        createGrid(userInput);
    }
}

function clear() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function drawBlack() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
    });
}

function eraser() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        });
    });
}

function drawDarkening() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        let alpha = 0.1;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(0, 0, 0, ${alpha}`;
            alpha += 0.1;
        });
    });
}

function drawRandom() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
                                                ${Math.floor(Math.random() * 255)},
                                                ${Math.floor(Math.random() * 255)})`;
        });
    });
}

createGrid(16);

const sizeBtn = document.querySelector("#size")
sizeBtn.addEventListener("click", () => {
    changeSize();
});

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () => {
    clear();
});

const blackBtn = document.querySelector("#black")
blackBtn.addEventListener("click", () => {
    drawBlack();
});

const rubberBtn = document.querySelector("#rubber")
rubberBtn.addEventListener("click", () => {
    eraser();
});

const rndBtn = document.querySelector("#random")
rndBtn.addEventListener("click", () => {
    drawRandom();
});

const darkBtn = document.querySelector("#darkening")
darkBtn.addEventListener("click", () => {
    drawDarkening();
});