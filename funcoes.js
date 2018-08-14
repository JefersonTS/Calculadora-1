/**
 * Created by jefer on 15/05/2017.
 */

//Exercicio_1
function subtracao () {

    var numer1 = document.getElementById("numer1").value;
    var numer2 = document.getElementById("numer2").value;
    var sub = numer1 - numer2;
    document.getElementById("calcu").innerHTML = "A Sub. dos dois números é: " + sub;
}

//Exercicio_2
function multiplicacao(){
    var nume1 = document.getElementById("nume1").value;
    var nume2 = document.getElementById("nume2").value;
    var nume3 = document.getElementById("nume3").value;
    var mult = nume1 * nume2 * nume3;
    document.getElementById("calcul").innerHTML = "O resultado da multiplicação é: " + mult;
}

//Exercicio_3
function divisao(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var div = num1 / num2;
    document.getElementById("calculos").innerHTML = "O resultado da Divisão é: " + div;
}

//Exercicio_4
function mediap (){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var med = ((n1 * 2)+(n2 * 3))/ 5;
    document.getElementById("calculo").innerHTML = "A média ponderada das notas é: " + med;
}

//Exercicio_5
function desconto () {
    var nu1 = document.getElementById("nu1").value;
    var result = nu1 - (nu1 * 0.1);
    document.getElementById("desc").innerHTML = "O Valor final é: " + result;
}
//Exercicio_6
function calc1 () {
    var n11 = document.getElementById("n11").value;
    var n22 = document.getElementById("n22").value;
    var sala = parseInt(n22 * 0.04) + parseInt(n11);
    document.getElementById("sal").innerHTML = "O Salário final é: " + sala;
}

//Exercicio_7
function calc2()  {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = parseInt(numero1 * 0.15) + parseInt(numero1);
    var numero3 = numero1 - (numero1 * 0.2);
    document.getElementById("pesoma").innerHTML = "O seu peso 15% acima é: " + numero2;
    document.getElementById("pesome").innerHTML = "O seu peso 20% abaixo é: " + numero3;
}

//Exercicio_8
function conv() {
    var n_1 = document.getElementById("n_1").value;
    var n_2 = n_1 * 1000;
    document.getElementById("resu").innerHTML = "O peso convertido é : " + n_2 +" gramas";
}

//Exercicio_9
function areat(){
    var bmaior = document.getElementById("bmaior").value;
    var bmenor = document.getElementById("bmenor").value;
    var alt = document.getElementById("alt").value;
    var at = ((parseInt(bmaior)+ parseInt(bmenor))*alt)/2;
    document.getElementById("trap").innerHTML = "A área de seu trapézio é: " + at;
}

//Exercicio_10
function areaq() {
    var lado = document.getElementById("lado").value;
    var a = lado * lado;
    document.getElementById("quad").innerHTML = "A área de seu quadrado é: " + a;
}

//Exercicio_11
function areal(){
    var dmaior = document.getElementById("dmaior").value;
    var dmenor = document.getElementById("dmenor").value;
    var a = (dmaior * dmenor)/2;
    document.getElementById("los").innerHTML = "A área de seu Losango é: " + a;
}

//Exercicio_12
function sal(){
    var sminimo = document.getElementById("sminimo").value;
    var sfuncionario = document.getElementById("sfuncionario").value;
    var sa = sfuncionario / sminimo;
    var arredondado = parseFloat(sa.toFixed(2))
    document.getElementById("s").innerHTML = "Você ganha " + arredondado + " salário minimo";
}

//Exercício_13
function tab(){
    var n_11 = document.getElementById("n_11").value;
    for (var n_22 = 0; n_22 < 11; n_22++) {
        document.getElementById("buada").innerHTML =
            document.getElementById("buada").innerHTML + n_11 + " x " + n_22 + " = " + n_11 * n_22 + "<br/>";
    }}

//Exercício_14
function ida(){
    var ano = document.getElementById("ano").value;
    var nasc = document.getElementById("nasc").value;
    var idade = ano - nasc;
    var meses = idade * 12;
    var dias = meses * 30; //Levando em conta que o mês tem 30 dias apenas, fazendo o ano ter 360 dias
    var semanas = meses * 4; //Levando em conta que o mês tem 4 semanas
    document.getElementById("idad").innerHTML = "Você tem " + idade + " anos.";
    document.getElementById("mese").innerHTML = "Você viveu " + meses + " meses.";
    document.getElementById("semana").innerHTML = "Você viveu " + semanas + " semanas.";
    document.getElementById("dia").innerHTML = "Você viveu " + dias + " dias.";
}

//Exercicio_18
function temp(){
    var g = document.getElementById("g").value;
    var f = 180 * (parseInt(g) + parseInt(32))/100;
    document.getElementById("tempe").innerHTML = "Sua temperatura em Graus Fahrenheit é: " + f + "Fº";
}

