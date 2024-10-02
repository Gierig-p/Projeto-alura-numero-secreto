alert("Boas vindas ao jogo do número secreto!");
class RandomGeneretor
{
    getRandom()
    {
        return Math.floor(Math.random() * 101);
    }
}
const random = new RandomGeneretor();
let numeroFinal = random.getRandom();

let respostaNumero = prompt("Digite um número:");
let rodar = true;
while (rodar) {
    if (respostaNumero == numeroFinal) {
        console.log("Parebéns você acertou!");
        rodar = false;
    }
    else if(respostaNumero > numeroFinal){
        respostaNumero = prompt(`Seu número é menor que ${respostaNumero}. Digite um novo número:`);
    }
    else{
        respostaNumero = prompt(`Seu número é maior que ${respostaNumero}. Digite um novo número:`);
    }
}