/*Qual é o maior, primeiramente utilize o prompt para o usuário informar o primeiro e o
segundo valor, verifique se é um número, caso seja se é qual é o número maior qual é
o menor ou igual e informe o para o usuário através do alert.
 */

let pri = prompt('Informe o Primeiro Valor: ');
if (Number(pri) == pri) {
    let seg = prompt('Muito Bem!!, Agora Informe o Segundo Valor: ');
    if (Number(seg) == seg) {
        let maior = Math.max(pri, seg)
        let menor = Math.min(pri, seg)
        if (pri == seg) {
            alert(" Numeros Iguais")
        } else {
            alert(` Maior numero = ${maior}, Menor Numero = ${menor}`)
        }
    } else {
        alert(" Segundo Valor Inválido !!")
    }
} else {
    alert(" Primeiro Valor Inválido !")
}
