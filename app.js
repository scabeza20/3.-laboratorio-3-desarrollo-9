function main() {

    let calcularP1 = document.getElementById("calcularP1");
    let resultadoP1 = document.getElementById("resultadoP1"); 

    function palindromo(){
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
    let resultadoP2 = document.getElementById("resultadoP2");

    function contarCaracteres(){
        let cadena = document.getElementById("cadena").value;
        let numeroCaracteres = cadena.length;

        resultadoP2.innerText = `La cadena "${cadena}" tiene ${numeroCaracteres} caracteres.`;

}
    calcularP2.addEventListener("click", ()=> contarCaracteres());


    let calcularP3 = document.getElementById("calcularP3");
    let resultadoP3 = document.getElementById("resultadoP3");

    function esBisiesto(){
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
}

main();