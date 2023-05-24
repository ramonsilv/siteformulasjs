function calculocirculo1(){
    let raio = document.getElementById("radius").value;
    let area = Math.PI * raio * raio;
    document.getElementById("resultado").innerHTML = "A área do círculo é: " + area.toFixed(2)
    
}

function hipotenusa(){
    let co = parseInt (document.getElementById("hipotenusa1").value)
    let ca = parseInt(document.getElementById("hipotenusa2").value)
    h = Math.sqrt(
        Math.pow(co,2) + 
        Math.pow(ca,2).toFixed(2))
    document.getElementById("hipotenusaresultado").innerHTML = h .toFixed(2)
}

function realDolar() {
    let TaxaCambio = 4.951.toFixed(2);
    let dolar = document.getElementById('Real').value;
    let real = (dolar * TaxaCambio).toFixed(2);
    document.getElementById('resultado-real').innerHTML = "R$" + real

}

function fahrenheit(){
    let Celsus = parseInt(document.getElementById('celsus').value)
    let Fahrenheit = Celsus * 9/5 + 32;
    let resultFahrenheit = Fahrenheit
    document.getElementById('resultado-celsus').innerHTML = resultFahrenheit + "Fº";

    if(resultFahrenheit == 0){
        document.getElementById('resultado-celsus').innerHTML = "Não é possível calcular por zero";
    }
}

km_ms = () => { //Função anônima
    KmHora = document.getElementById('Km').value
    mSegundo = (KmHora / 3.6).toFixed(2)
    document.getElementById('resultado-km').innerHTML = mSegundo + " ms"
}

function Baskhara1() {
    let a, b, c;
    a = parseInt(document.getElementById('A').value);
    b = parseInt(document.getElementById('B').value);
    c = parseInt(document.getElementById('C').value);
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    document.getElementById("resultado-baskx1").innerHTML = "X1 = " + x1.toFixed(2)
    document.getElementById("resultado-baskx2").innerHTML = "X2 = " + x2.toFixed(2)

    if(a == 0 && b == 0 && c == 0){
        document.getElementById("resultado-baskx1").innerHTML = "Não é possível calcular por zero"
        document.getElementById("resultado-baskx2").innerHTML = "Não é possível calcular por zero"
    }
}

function Media() {
    nota1 = parseFloat(document.getElementById('Nota1').value);
    nota2 = parseFloat(document.getElementById('Nota2').value);
    nota3 = parseFloat(document.getElementById('Nota3').value);
    media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
    document.getElementById('resultado-media').innerHTML = "Media Final: " + media

}

function Retangulo() {
    base = parseInt(document.getElementById('retangulo1').value);
    altura = parseInt(document.getElementById('retangulo2').value);
    retangulo = base * altura;
    document.getElementById('retangulo-resultado').innerHTML = retangulo;
}

function Triangulo() {
    base = parseInt(document.getElementById('triangulo1').value)
    altura = parseInt(document.getElementById('triangulo2').value)
    area = ((base * altura) / 2).toFixed(2)
    document.getElementById('resultado-triangulo').innerHTML = area;
}