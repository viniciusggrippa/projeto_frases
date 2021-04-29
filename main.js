var imagem = ['coringa.png', 'darth-vader.jpg', 'exterminador_do_futuro.jpg', 'i-see.jpg', 'jigsaw.jpg'];
var frase = ["Why so serious?", "Luke, I am your father", "Hasta la vista, Baby", "I see dead people", "Hello… I Want to play a game"]
var i;
var resposta;
var paragrafo;

function insereImagem(){
    
    for(i = 0; i < 5; i++) {
        var idImagem = "imagem" + i;
        document.getElementById(idImagem).src = imagem[i];
    }
}

function mostraFrase(x) {
    resposta = frase[x];
    paragrafo = "frase" + x;
    imagemSelecionada = "imagem" + x;
    document.getElementById(imagemSelecionada).style.display = "none";
    document.getElementById(paragrafo).style.display = "block";
    document.getElementById(paragrafo).innerHTML = resposta;
}

function mostraImagem(x) {
    paragrafo = "frase" + x;
    imagemSelecionada = "imagem" + x;
    document.getElementById(imagemSelecionada).style.display = "block";
    document.getElementById(paragrafo).style.display = "none";
}