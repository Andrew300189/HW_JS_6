function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const controlsDiv = document.getElementById('controls');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');
const input = controlsDiv.querySelector('input');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(input.value, 10);
  const step = parseInt(input.step, 10);
  let boxesHTML = '';

  for (let i = 0; i < amount; i += step) {
    const boxSize = 30 + i * 10;
    const boxColor = getRandomHexColor();
    boxesHTML += `<div class="box" style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`;
  }

  boxesDiv.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
  input.value = '';
}
