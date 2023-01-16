let btnInscrever = document.querySelector('#btn-inscrever')
const caixaAnimacao = document.getElementById('formularioInscricao')
let btnInscrever2 = document.querySelector('#btn-inscrever-2')


// animacao
btnInscrever.addEventListener('click', () => {
    window.scroll({ top: window.scrollTo(0, 0), behavior: 'smooth' })
})
btnInscrever.addEventListener("click", ()=> {
    caixaAnimacao.style.animation = "";
    setTimeout(() => caixaAnimacao.style.animation = "animacao 1s linear");
});

// animacao mobile
btnInscrever2.addEventListener('click', () => {
    window.scroll({ top: window.scrollTo(0, 570), behavior: 'smooth' })
})
btnInscrever2.addEventListener("click", ()=> {
    caixaAnimacao.style.animation = "";
    setTimeout(() => caixaAnimacao.style.animation = "animacao 1s linear");
})