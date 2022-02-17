const placa = document.querySelector('.placa');
const inputText = document.querySelector('#input-text');
const plaqueType = document.querySelector('#plaque-type');

inputText.addEventListener('keyup', () => placa.innerText = inputText.value);

plaqueType.addEventListener('change', () => {
  const board = plaqueType.value;
  const afterStyle = document.head.appendChild(document.createElement("style"));
  if (board === 'blue') {
    placa.style.backgroundColor = '#006eb0';
    afterStyle.innerHTML = ".placa:after {background: #006eb0;}";
  } else if (board === 'green') {
    placa.style.backgroundColor = '#4a9242';
    afterStyle.innerHTML = ".placa:after {background: #4a9242;}";
  } else if (board === 'red') {
    placa.style.backgroundColor = '#ef482a';
    afterStyle.innerHTML = ".placa:after {background: #ef482a;}";
  }
});
