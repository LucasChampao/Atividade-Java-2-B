/*Crie uma calculadora, utilize o prompt para entrada de dados como nos exercícios
anteriores, a primeira pergunta é qual cálculo o usuário quer usar, “multiplicacao”,
“divisao”, “subtracao”, “adicao”, após o usuário digitar um destes valores verifique se o
usuário informou caso o valor não existir emita um alert que valor foi informado errado,
caso tenha informado corretamente peça o primeiro valor e o segundo valor e em
seguida emita um alert com o cálculo realizado.
*/

let conta = prompt(" Qual operação aritmética você quer ?: “multiplicacao”, “divisao”, “subtracao”, “adicao”,")
/*if (conta == "multiplicacao" || conta == "divisao" || conta == "adicao" || conta == "subtracao") {
    let vl1 = Number(prompt("Informe um Valor: "))
    let vl2 = Number(prompt("Informe o segundo valor: "))
    switch (conta) {
        case "multiplicacao":
            let mult = vl1 * vl2
            alert(` O Resultado da ${conta} de ${vl1} x ${vl2} foi: ${mult}`)
            break;
        case "divisao":
            let div = vl1 / vl2
            alert(` O Resultado da ${conta} de ${vl1} /  ${vl2} foi: ${div}`)
            break;
        case "adicao":
            let ad = vl1 + vl2
            alert(`O Resultado da ${conta} de ${vl1} + ${vl2} foi: ${ad}`)
            break;
        case "subtracao":
            let sub = vl1 - vl2
            alert(`O Resultado da ${conta} de ${vl1} -  ${vl2} foi: ${sub}`)
            break;
        default:
            alert('Calculo digitado nao foi encontrado')
            break;
    }
} else {
    alert(" OPERAÇÃO INVÁLIDA !!")
}
*/
let valor1 = (prompt("Informe um Valor: "))
let valor2 = (prompt("Informe o segundo valor: "))
if(isNaN(valor1) || isNaN(valor2)){
    alert('nao e numero')
}else{
    let Resultado = 0
    switch(conta){
        case 'multiplicacao':
            Resultado = valor1 * valor2
            break;
        case 'divisao':
            Resultado = valor1 / valor2
            break;
        case 'subtracao':
            Resultado = valor1 - valor2
            break;
        case 'adicao':
            Resultado = Number(valor1) + Number(valor2)
            break;
        default:
           alert('Calculo digitado nao foi encontrado')
        break;
    }
    alert(` O resultado é: ${Resultado}`)
}