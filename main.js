const form = document.getElementById('form-camp');
const campA = document.getElementById('camp-a');
const campB = document.getElementById('camp-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const errorM = 'Repita. Valor de A necessita ser maior que B';
    const sucessM = 'Sucesso. B é maior que A'

    const a = document.getElementById('camp-a').value;
    const b = document.getElementById('camp-b').value;
    const intA = parseInt(a);
    const intB = parseInt(b);

    if (intB > intA) {
        const containerMenSucesso = document.querySelector('.mensagem-sucesso');
        containerMenSucesso.innerHTML = sucessM
        containerMenSucesso.style.background = 'rgb(19, 109, 19)'
        campA.value = ''
        campB.value = ''
    } else {
        const containerMenSucesso = document.querySelector('.mensagem-sucesso');
        containerMenSucesso.innerHTML = errorM
        containerMenSucesso.style.background = 'rgb(145, 0, 0)'
        campA.value = ''
        campB.value = ''
    }
})





