const span = document.querySelector('.span-timer');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnClean = document.querySelector('.reset');

console.log(span)
console.log(btnStart)
console.log(btnStop)

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

    var value = parseFloat(span.innerHTML)

    interval = setInterval(() => {
        value += 0.1

        span.innerHTML = value.toFixed(1)
    }, 100)
}

btnStop.onclick = () => {

    clearInterval(interval)
}

btnClean.onclick = () => {
    clearInterval(interval)
    span.innerHTML = "0.0"
}