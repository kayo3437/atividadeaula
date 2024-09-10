function elementosFrequente(arrar) {
    let maior = null;
    let ocorrenciasMaior = 0;  // Inicializado com 0, não com -1
    
    for (let i = 0; i < arrar.length; i++) {
        let ocorrencias = 1;
        for (let t = i + 1; t < arrar.length; t++) {
            if (arrar[i] === arrar[t]) {
                ocorrencias++;
            }
        }
        if (ocorrencias > ocorrenciasMaior) {
            maior = arrar[i];
            ocorrenciasMaior = ocorrencias;
        }
    }
    
    if (ocorrenciasMaior === 1) {  // Mudança para considerar todos os elementos com uma única ocorrência
        console.log("Não há elementos mais frequentes");
    } else {
        return maior;  // Retorna o valor mais frequente
    }
}