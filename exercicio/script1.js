const contador = document.getElementById('contador')
const status = document.getElementById('status')

let numeroPessoas = 0
const numeroMinimo = 5

function registrarPresenca() {
    numeroPessoas++
    contador.textContent = numeroPessoas

    if (numeroPessoas >= numeroMinimo) {
        status.textContent = 'A aula pode começar'
        //status.classList.remove('aguardando')
        //status.class.List.add('pode-comecar')
        status.className = 'pode-comecar'
    }else {
        status.textContent = 'Aguardando por mais presenças'
        status.className = 'aguardando...'
    }
}