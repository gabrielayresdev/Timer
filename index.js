const span_timer = document.querySelector('.span-timer');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnClean = document.querySelector('.reset');

const timer = document.querySelector('.header--left');
const stopwatch = document.querySelector('.header--right');

const countdown = document.querySelector('.countdown');
const cronometro = document.querySelector('.cronometro');


/* HEADER */

timer.addEventListener('click', () => {
    timer.classList.add('header__col--ativo')
    stopwatch.classList.remove('header__col--ativo')
    countdown.classList.add('timer--ativo')
    cronometro.classList.remove('timer--ativo')
})
stopwatch.addEventListener('click', () => {
    stopwatch.classList.add('header__col--ativo')
    timer.classList.remove('header__col--ativo')
    cronometro.classList.add('timer--ativo')
    countdown.classList.remove('timer--ativo')
})

/* Stopwatch */

var interval

btnStart.addEventListener('click', () => {
    btnStart.classList.toggle('botao--desativado')
    btnStop.classList.toggle('botao--desativado')
})

btnStop.addEventListener('click', () => {
    btnStart.classList.toggle('botao--desativado')
    btnStop.classList.toggle('botao--desativado')
})

btnStart.onclick = () => {

    var value = parseFloat(span_timer.innerHTML)

    interval = setInterval(() => {
        value += 0.1

        span_timer.innerHTML = value.toFixed(1)
    }, 100)
}

btnStop.onclick = () => {

    clearInterval(interval)
}

btnClean.onclick = () => {
    clearInterval(interval)
    span_timer.innerHTML = "0.0"
}