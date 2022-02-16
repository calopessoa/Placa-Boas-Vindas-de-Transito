const placa = document.querySelector('.placa');
const inputText = document.querySelector('#input-text');

inputText.addEventListener('keyup', () => placa.innerText = inputText.value);

const download = function() {
    let link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.querySelector('.placa').toDataURL()
    link.click();
  }