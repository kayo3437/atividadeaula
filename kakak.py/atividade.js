/*
function gerarArrayAleatorio(tamanho, min, max)
{
    if (tamanho <= 0 || min > max)
    {
        throw new Error("Argumentos invalidos");
    }
    const arrayAleatorio = [];
    for (let i = 0; i < tamanho; i++)
    {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
arrayAleatorio.push(numeroAleatorio);
    }
console.log(arrayAleatorio);
return arrayAleatorio;
}

gerarArrayAleatorio(10, 3,15) 
*/

/*
function elementoMaisFrequente(arrar) {
    if (arrar.length === 0) {
        console.log("Não há elemento mais frequente");
        return;
    }

    const frequencias = {};
    let maxFrequencia = 0;
    let elementoMaisFrequente = null;

    for (let i = 0; i < arrar.length; i++) {
        const elemento = arrar[i];
        frequencias[elemento] = (frequencias[elemento] || 0) + 1;
        
        if (frequencias[elemento] > maxFrequencia) {
            maxFrequencia = frequencias[elemento];
            elementoMaisFrequente = elemento;
        }
    }

    const frequenciasDoElementoMaisFrequente = Object.values(frequencias).filter(f => f === maxFrequencia).length;

    if (frequenciasDoElementoMaisFrequente === 1) {
        return elementoMaisFrequente;
    } else {
        console.log("Não há elemento mais frequente");
    }
}


console.log(elementoMaisFrequente([1, 2, 2, 3, 3, 3])); 
console.log(elementoMaisFrequente([1, 1, 2, 2]));       
console.log(elementoMaisFrequente([]));
*/

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function arranjorandom(array,min,max){
    const arranjo = [];
    for (let i=0;i<array;i++){
        arranjo.push(aleatorio(min,max));
    }
    return arranjo;
}

function elementosiguais(arranjoAleatorio){
    const conta = {};
    let contamax = 0;
    let elementos = null;
    arranjoAleatorio.forEach(num => {
        conta[num] = (conta[num] || 0)+1;
        if (conta[num]>contamax){
            contamax = conta[num];
            elementos = num;
        }
    });
    const temEmpate = Object.values(conta).filter(count => count === contamax).length > 1;
    return temEmpate ? "Não há elemento mais frequente" : elementos;
}

function removeriguais(arranjo){
    const elementosunicos = [...new Set(arranjo)];
    if(elementosunicos.length === arranjo.length){
        return 'Não há elementos unicos.';
    }
    return elementosunicos;
}

function unirarranjo(arranjoAleatorio, arranjoAleatorio2){
    const arranjounido = [...arranjoAleatorio, ...arranjoAleatorio2];
    return arranjounido;
}

function matrizAleatoria(arranjo,linhas,colunas){
    if (arranjo.length !== linhas * colunas){
        return 'Matriz não pode ser feita.'
    }
    const matrix = []
    for (let i=0;i<linhas;i++){
        const linha = arranjo.slice(i*colunas,(i+1)*colunas);
        matrix.push(linha);
    }
    return matrix;
}

const array = 9;
const max = 10;
const min = 1;

const arranjoAleatorio = arranjorandom(array,min,max);
console.log("-----------------------------------");
console.log("Passando pela função do Exercício 1");
console.log(Entrada: tamanho do array = ${array}, min = ${min}, max = ${max});
console.log('Saida do arranjo é',arranjoAleatorio);
console.log("-----------------------------------");

const arranjoAleatorio2 = arranjorandom(array,min,max);
console.log("Passando pela função do Exercício 4");
console.log(Entrada: tamanho do array = ${array}, min = ${min}, max = ${max});
console.log('Saida do arranjo adicional é',arranjoAleatorio2);
console.log("-----------------------------------");

const elementos = elementosiguais(arranjoAleatorio);
console.log("Passando pela função do Exercício 2");
console.log('Entrada do arranjo é',arranjoAleatorio);
console.log('Saida do elementos iguais é',elementos);
console.log("-----------------------------------");

const semRepeticao = removeriguais(arranjoAleatorio);
console.log("Passando pela função do Exercício 3");
console.log('Entrada do arranjo é',arranjoAleatorio);
console.log('Saida do elementos unicos é',semRepeticao);
console.log("-----------------------------------");

const unirArranjo = unirarranjo(arranjoAleatorio, arranjoAleatorio2);
const semRepeticaoUnida = removeriguais(unirArranjo)
console.log("Passando pela função do Exercício 3");
console.log('Entrada dos arranjos são',arranjoAleatorio,'e',arranjoAleatorio2);
console.log('Saida do arranjo unido é',unirArranjo);
console.log('Saida do arranjo unido e sem repetições é',semRepeticaoUnida)
console.log("-----------------------------------");

const linhas = 3;
const colunas = 3;
const matrizFinal = matrizAleatoria(arranjoAleatorio,linhas,colunas);
console.table(matrizFinal);
console.log("-----------------------------------");