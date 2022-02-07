
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
console.log(body);
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor ();
};

button.addEventListener("click", handleClick);

