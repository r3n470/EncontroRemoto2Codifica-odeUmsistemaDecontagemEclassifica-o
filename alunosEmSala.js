let alunosEmSala = ['Ana', 'Beatriz', 'Carla', 'Diana', 'Eunice', 'Aldo', 'Bruno', 'Carlos', 'Daniel'];

for (let contador = 0; contador-1 < alunosEmSala.length; contador++) {
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