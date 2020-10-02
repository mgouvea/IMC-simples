// capturando range
let weightRange = document.querySelector('#weightRange');
let heightRange = document.querySelector('#heightRange');

// capturando inputs
let weightInput = document.querySelector('#weightInput');
let heightInput = document.querySelector('#heightInput');
let imcInput = document.querySelector('#imcInput');

// capturando resultado
let okImc = document.querySelector('#okImc');
let color = document.querySelector('#okImc');

function start() {
  weightRange.addEventListener('input', handleValueChange);
  heightRange.addEventListener('input', handleValueChange);
}

function handleValueChange() {
  weightInput.value = `${weightRange.value} Kg`;
  heightInput.value = `${heightRange.value} m`;
  calIMC();
}

function calIMC() {
  let w = weightRange.value;
  let h = heightRange.value;
  let imc = null;

  w = parseInt(w);
  h = parseFloat(h);

  console.log(w, h);

  imc = w / (h * h);
  imc = parseFloat(imc.toFixed(2));

  if (!(imc > 1) || imc === Infinity) {
    imcInput.value = '0';
    color.style.backgroundColor = '#fefefe';
    okImc.textContent = '';
  } else {
    imcInput.value = imc;
    imcRating(imcInput.value);
  }
}

function imcRating(imc) {
  if (imc < 10 || imc > 90) {
    imcInput.value = 'Inválido';
    color.style.backgroundColor = '#fefefe';
    okImc.textContent = '';
  } else if (imc <= 18.5) {
    color.style.backgroundColor = '#fa4f52';
    okImc.textContent = 'ANOREXIA';
  } else if (imc > 18.5 && imc <= 24.9) {
    color.style.backgroundColor = '#adff2f';
    okImc.textContent = 'PESO NORMAL';
  } else if (imc > 24.9 && imc <= 29.9) {
    color.style.backgroundColor = '#eddc1c';
    okImc.textContent = 'SOBREPESO';
  } else if (imc > 29.9 && imc <= 39.9) {
    color.style.backgroundColor = '#c3871c';
    okImc.textContent = 'OBESIDADE';
  } else {
    color.style.backgroundColor = '#be0003';
    okImc.textContent = 'OBESIDADE MÓRBIDA';
  }
}

start();
calIMC();
