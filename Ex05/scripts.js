/*Calculando a idade, primeiramente utilize o prompt para o usuário informar o valor,
verifique se é um número, caso seja calcule o valor digitado com o ano atual e informe
o usuário através do alert o resultado da idade dele.

*/
let age = prompt(" Informe sua Data de nascimento:")
if(Number(age)== age){
    let idade = (2023-age)
    alert(` Sua Idade é: ${idade} anos`)
}else{
    alert(" Resposta Inválida !")
}
