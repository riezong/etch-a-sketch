// Create 16x16 grid w/ divs

let row = 16;
let col = 16;

const container = document.querySelector(".container");

const grid = document.createElement("div");
grid.setAttribute("id", "grid");
container.appendChild(grid);

for (y = 0; y < row; y++) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.textContent = y;
  grid.appendChild(row);

  for (x = 0; x < col; x++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = x;
    row.appendChild(square);
  }
}