function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widgetColor = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

const handleClick = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  widgetColor.textContent = newColor;
};

colorBtn.addEventListener("click", handleClick);