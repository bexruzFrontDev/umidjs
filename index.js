let box = document.querySelector('.box')
let sayt = document.querySelector('.sayt')

box.onclick = function() {
    box.classList.toggle('box-2')
    sayt.classList.toggle('dark')
}