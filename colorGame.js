var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) squares[i].style.backgroundColor = colors[i];
    else squares[i].style.display = "none";
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (this.style.backgroundColor === pickedColor) {
      messageDisplay.textContent = "correct";
      changeColors(this.style.backgroundColor);
      h1.style.backgroundColor = this.style.backgroundColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
  squares[i].style.backgroundColor = colors[i];
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length + 1)];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}