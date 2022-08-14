
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const backgroundColor = document.querySelector('body')

const relogio = setInterval(function time(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes()
    let sec = date.getSeconds()
    if (hr <= 9) {horas.textContent = `0${hr}`} else {horas.textContent = hr;}
    if (min <= 9) {minutos.textContent = `0${min}`} else {minutos.textContent = min;}
    if (sec <= 9) {segundos.textContent = `0${sec}`} else {segundos.textContent = sec}
    document.querySelector('body').style.background = `linear-gradient(${(hr+min+sec)}deg, #19197cd8, #1af921da)`
    console.log((hr+min+sec))
})
