
function somar() {
    var tn1 = document.getElementById('filho')
    var tn2 = document.getElementById ('mae')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML= `A soma da idade do filho <b>${n1}</b>  e da mãe <b> ${n2}</b> é igual a <b>${s}</b>`
}