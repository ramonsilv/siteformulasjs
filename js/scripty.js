function calculocirculo1(){
    let raio = document.getElementById("radius").value;
    let area = Math.PI * raio * raio;
    document.getElementById("resultado").innerHTML = "A área do círculo é: " + area.toFixed(2);
}

function hipotenusa(){
    let co = parseInt (document.getElementById("hipotenusa1").value)
    let ca = parseInt(document.getElementById("hipotenusa2").value)
    h = Math.sqrt(
        Math.pow(co,2) + 
        Math.pow(ca,2).toFixed(2)
    )
    document.getElementById("hipotenusaresultado").innerHTML = h .toFixed(2)
}

function realdolar(){
    let real = parseInt(document.getElementById("real").value)
    let cotacao = parseInt(document.getElementById("cotacao").value)
    let result = real / cotacao
    let dolar = result
    document.getElementById("valorcotacao").innerHTML = 
}

function fahrenheit(){
    let Celsius = prompt
    let Fahrenheit = Celsius* 9/5 + 32
    let resultFahrenheit = Fahrenheit
    alert(resultFahrenheit)
}