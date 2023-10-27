/*Crie um calculador de média de notas de um aluno, primeiramente utilize o prompt
para o usuário informar o nome e em seguida peça que ele informe a primeira nota e a
segunda nota, ao final verifique se ele ficou com a média maior que 7, caso sim emita
um alert com no nome do aluno a média e os parabéns caso não emita um alert com
nome e a média e informe que ele ficou abaixo da média.
*/
let nome = prompt(" Informe seu Nome:")
let nt1 = prompt(" Informe sua Primeira Nota: " + nome)
let nt2 = prompt(" Informe agora sua Segunda Nota: " + nome)

/*
if (media >= 7){
    alert(`${nome} sua média foi de ${media}, Meus Parabéns, APROVADO !!`)
}else{
    alert(`${nome} sua média foi de ${media}, e você ficou abaixo da Média, REPROVADO !!`)
}
*/

if (isNaN(nt1) || isNaN(nt2)) {
    alert('nao é numero')
} else {
    let media = (Number(nt1) + Number(nt2)) / 2

    if (media >= 7) {
        alert(` Aprovado ${nome} pois sua média é ${media} :)`);
    } else {
        alert(` Reprovado ${nome} pois sua média é ${media} :()`);
    }
}