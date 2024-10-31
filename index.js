const content = document.querySelector(".content");
const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "Change the size";

body.insertBefore(button, content);

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    return `rgb(${r}, ${g}, ${b})`;
}

function createSquares(numberPerRow) {
  const total = numberPerRow * numberPerRow + numberPerRow;
  const lineBreaker = numberPerRow + 1;

  for (i = 1; i < total; i++) {
    const square = document.createElement("div");
    if (i % lineBreaker === 0) {
      square.style.cssText = "height: 0; width: 0; width: 100%";
    } else {
      square.style.cssText = "height: 48px; width: 48px;";
      // hover effect
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = getRandomRGB();
      })
    }
    content.appendChild(square);
  }
}

createSquares(16);

button.addEventListener("click", () => {
  do {
    gridSize = Number(
      prompt(
        "What is the number of squares per side for the new grid? (Max: 100)"
      )
    );
  } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);

  const squares = document.querySelectorAll(".content div");
  squares.forEach((el) => {
    el.remove();
  });
  createSquares(gridSize);
});
