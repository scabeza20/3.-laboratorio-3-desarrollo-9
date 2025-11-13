function main() {

    let calcularP1 = document.getElementById("calcularP1");
    function palindromo(){
    let resultadoP1 = document.getElementById("resultadoP1"); 
    let palindromo = document.getElementById("palindromo").value;
    let binario = parseInt(palindromo);
    binario = binario.toString(2);
    let textoInvertido = palindromo.split("").reverse().join("");
    let binarioInvertido = binario.split("").reverse().join("");

    if(isNaN(binario)){
        resultadoP1.innerText = `El valor "${palindromo}" no es un número válido en base 10.`;
        return;
    }

    if(palindromo === textoInvertido && binario === binarioInvertido){
        resultadoP1.innerText = `El valor ingresado: "${palindromo}" es un palíndromo en base 2 y base 10.`;
    } else if(palindromo === textoInvertido){
        resultadoP1.innerText = `El valor ingresado: "${palindromo}" Es un palindromo en base 10.`;
    }else if(binario === binarioInvertido){
        resultadoP1.innerText = `El valor ingresado: "${palindromo}" Es un palindromo en base 2.`;
    } else{
        resultadoP1.innerText = `El valor ingresado: "${palindromo}" No es un palindromo ni en base 2 ni en base 10.`;
    }

    }
    calcularP1.addEventListener("click", ()=> palindromo());

    let calcularP2 = document.getElementById("calcularP2");
    
    function countLetters(){
        let resultadoP2 = document.getElementById("resultadoP2");
            let text = document.getElementById("cadena").value;
                const answer ={};
                for (let i = 0; i < text.length; i++) {
                    if (answer[text[i]]) {
                        answer[text[i]]++;
                    }else{
                        answer[text[i]] = 1;
                    }
                    
                }
                return resultadoP2.innerText = JSON.stringify(answer);
                
     }
    calcularP2.addEventListener("click", ()=> countLetters());


    let calcularP3 = document.getElementById("calcularP3");
    function esBisiesto(){
    let resultadoP3 = document.getElementById("resultadoP3");
    let ano = document.getElementById("ano").value;
    let fecha = new Date(ano);
    let year = fecha.getFullYear();
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        resultadoP3.innerText = `El año ${year} es bisiesto.`;
    } else{
        resultadoP3.innerText = `El año ${year} no es bisiesto.`;
    }

    }
    calcularP3.addEventListener("click", ()=> esBisiesto());

    let calcularP4 = document.getElementById("calcularP4");
    function calcNumber(){
    let resultadoP4 = document.getElementById("resultadoP4");
    let numero = parseInt(document.getElementById("number").value);
    if(isNaN(numero) || numero === ""){
        resultadoP4.innerText = `No es un número primo.`;
        return;
    }
    const numerosPrimos = [];
    let suma=0;

    for (j =1; j <= numero; j++) {

        if (primo(j)) {
        numerosPrimos.push(j);
        }
        
    }
    
    for (let i = 0; i < numerosPrimos.length; i++) {
        suma =suma + numerosPrimos[i];
        
    }
    resultadoP4.innerText = `La suma de los números primos es: ${suma}`;

    function primo(nuevo) {
        
    for ( i = 2; i < nuevo; i++) {

        if (nuevo % i === 0) {
        return false;
        }

    }
    return nuevo ;
    }
            
    }
    calcularP4.addEventListener("click", ()=> calcNumber());
}
main();