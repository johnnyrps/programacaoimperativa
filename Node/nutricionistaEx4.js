//Programa para saber IMC (Indice de Massa Corporal) de um dos pacientes conforme tabela recebida:
let nome = "Marcos Santana";
let idade = 25;
let peso = 79;
let altura = 1.80;
let plano = "ouro";
let imc = peso/ ( altura*altura );

console.log(nome+ " tem plano "+plano+" e" +" tem "+idade+" anos e seu índice de massa corporal é de "+imc);

nome = "Ana";
sobrenome = "Paula";
idade = 26;
peso = 55.0;
altura = 1.62;
plano = "Prata";
imc = peso/ (altura*altura);

console.log(nome + "    " + sobrenome + "   tem    " + idade + " anos "+"   peso   " + peso + "  altura   " + altura + "   plano   " + plano+ "  e sua imc é    " +imc);
