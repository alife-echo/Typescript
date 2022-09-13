var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('result');
function calcular(n1, n2) {
    return n1 + n2;
}
//+ = deixar o numero positivo
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
