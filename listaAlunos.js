let numeroDeAlunos = 10

for (let contador = 0; contador < numeroDeAlunos; contador++) {
    console.log(contador)

    if (contador == 0) {
        console.log ('classificado o zero')
    }
    if (contador % 2 == 0) {
            console.log('número par')
    } 
    else {
            console.log('número ímpar')
    }
}