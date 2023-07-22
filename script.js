//função para trocar o paragrafo

const btn = document.querySelector('button');

btn.addEventListener('click', addParag);

var parag = document.querySelector('p');

function addParag() {
    const name  = prompt('Insira seu nome:');
    parag.textContent = 'Seja bem vindo ao nosso jogo de advinhação: ' + name + ", " + 'estamos felizes com sua participação em nosso jogo.';
}

//jogo
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        var palpites = document.querySelector('.palpites');
        var ultimoResultado = document.querySelector('.ultimoResultado');
        var baixoOuAlto = document.querySelector('.baixoOuAlto');

        var envioPalpite = document.querySelector('.envioPalpite');
        var campoPalpite = document.querySelector('.campoPalpite');

        var contagemPalpites = 1;
        var botaoReinicio;

        function conferirPalpite() {
            var palpiteUsuario = Number(campoPalpite.value);
            if (contagemPalpites === 1) {
                palpites.textContent = 'Palpites anteriores: ';
            }
            palpites.textContent += palpiteUsuario + ' ';

            if (palpiteUsuario === numeroAleatorio) {
                ultimoResultado.textContent = 'Parabéns! Você acertou!';
                ultimoResultado.style.backgroundColor = 'green';
                baixoOuAlto.textContent = '';
                configurarFimDeJogo();
            } else if (contagemPalpites === 10) {
                ultimoResultado.textContent = 'Fim de jogo!';
                baixoOuAlto.textContent = '';
                configurarFimDeJogo();
            } else {
                ultimoResultado.textContent = 'Errado!';
                ultimoResultado.style.backgroundColor = 'red';
                if (palpiteUsuario < numeroAleatorio) {
                    baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
                } else if (palpiteUsuario > numeroAleatorio) {
                    baixoOuAlto.textContent = 'Seu palpite está muito alto!';
                }
            }

            contagemPalpites++;
            campoPalpite.value = '';
            campoPalpite.focus();
        }

        envioPalpite.addEventListener('click', conferirPalpite);

        function configurarFimDeJogo() {
            campoPalpite.disabled = true;
            envioPalpite.disabled = true;

            botaoReinicio = document.createElement('button');
            botaoReinicio.textContent = 'Iniciar novo jogo';
            document.body.appendChild(botaoReinicio);
            botaoReinicio.addEventListener('click', reiniciarJogo);
        }

        function reiniciarJogo() {
            contagemPalpites = 1;
            var reiniciarParas = document.querySelectorAll('.resultadoParas p');
            for (var i = 0; i < reiniciarParas.length; i++) {
                reiniciarParas[i].textContent = '';
            }

            botaoReinicio.parentNode.removeChild(botaoReinicio);

            campoPalpite.disabled = false;
            envioPalpite.disabled = false;
            campoPalpite.value = '';
            campoPalpite.focus();

            ultimoResultado.style.backgroundColor = 'white';

            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        }

/*
condição

var number = 30;
var name = prompt('Insira um numero:');
if(name == 30) {
    window.alert('correto');
}
else {
    window.alert('incorreto');
}*/

