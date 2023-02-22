let timerInterval;
let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;

const horasSpan = document.getElementById('horas');
const minutosSpan = document.getElementById('minutos');
const segundosSpan = document.getElementById('segundos');
const centesimasSpan = document.getElementById('centesimas');
const startImg = document.getElementById('start');
const stopImg = document.getElementById('stop');
const resetImg = document.getElementById('reset');

function update() {

  if (centesimas === 100) {
    centesimas = 0;
    segundos++;
  }else{
    centesimas++;
  }

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  renderizar();
}

function renderizar() {
  horasSpan.textContent = horas;
  minutosSpan.textContent = minutos;
  segundosSpan.textContent = segundos
  centesimasSpan.textContent = centesimas;
}


startImg.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = setInterval(update, 10);
});

stopImg.addEventListener('click', function() {
  clearInterval(timerInterval);
});

resetImg.addEventListener('click', function() {
  clearInterval(timerInterval);
  horas = 0;
  minutos = 0;
  segundos = 0;
  centesimas = 0;
  renderizar();
});

resetImg.click();
