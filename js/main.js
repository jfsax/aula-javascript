
function clicou(){
    document.getElementById("obrigado").innerHTML = "<u>Obrigado por clicar!</u>";
    //console.log(document.getElementById("obrigado"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://twitter.com"); // opens a new tab
    //window.location.href = "https://twitter.com/"; //opens on the same tab
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("What's your age?")
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Meu nome é Jessica", "Jessica", "Minerva"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/


/*
var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"banana", cor:"amarela"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.nome + fruta.cor);
*/

//var nome = "Jessica X";
//var n1 = 24;
//var n2 = 10;
//var frase = "She's the best";
// alert("Usuário/a: " + nome + ", " + idade + " anos ");
//alert(n1 + n2);
//console.log(nome);
//console.log(idade);
//console.log(frase.toUpperCase());
//alert(frase.replace("She's", "I am"))
//var lista = ["maçã", "banana", "laranja"];
//lista.push("uva");
//lista.pop("maçã");
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

