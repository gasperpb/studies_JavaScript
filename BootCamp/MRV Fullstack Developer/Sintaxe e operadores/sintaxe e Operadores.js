//          Operadores de atribuição composto
// Nome	Operador encurtado	Significado
// Atribuição	x = y	x = y
// Atribuição de adição	x += y	x = x + y
// Atribuição de subtração	x -= y	x = x - y
// Atribuição de multiplicação	x *= y	x = x * y
// Atribuição de divisão	x /= y	x = x / y
// Atribuição de resto	x %= y	x = x % y
// Atribuição exponencial	x **= y	x = x ** y
// Atribuição bit-a-bit por deslocamento á esquerda	x <<= y	x = x << y
// Atribuição bit-a-bit por deslocamento á direita	x >>= y	x = x >> y
// Atribuição de bit-a-bit deslocamento á direita não assinado	x >>>= y	x = x >>> y
// Atribuição AND bit-a-bit	x &= y	x = x & y
// Atribuição XOR bit-a-bit	x ^= y	x = x ^ y
// Atribuição OR bit-a-bit	x |= y	x = x | y



// const saoIguais = num1 === num2;
//const soma = num2 + num1;
// if com Sintaxe 
// if (saoIguais) {
//     return "São iguais!"
// }
// return "Não são iguais!"

//  Sintaxe mais simples.
// return saoIguais ? "São iguais" : "Não são iguais!"

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2) {
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }

    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));