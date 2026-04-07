let barraPesquisa = document.getElementById("pesquisa");
let cardProcessador = document.getElementById("processador");
let cardPlacaMae = document.getElementById("placa-mae");
let cardPlacaVideo = document.getElementById("placa-video");
let cardMemoriaRam = document.getElementById("memoria-ram");
let cardArmazenamento = document.getElementById("armazenamento");
let cardFonte = document.getElementById("fonte");

function AparecerCard(){
    if(barraPesquisa.value == "Processador" || barraPesquisa.value == "CPU" || barraPesquisa.value == "Processadores" || barraPesquisa.value == "CPUs" || barraPesquisa.value == "processador" || barraPesquisa.value == "cpu" || barraPesquisa.value == "processadores" || barraPesquisa.value == "cpus") {
        cardProcessador.style.display = "block";
    } else if(barraPesquisa.value == "Placa-Mãe" || barraPesquisa.value == "Placa-Mae" || barraPesquisa.value == "Placa-MAE" || barraPesquisa.value == "Placa-MaE" || barraPesquisa.value == "Placa-mae" || barraPesquisa.value == "Placa-mãe" || barraPesquisa.value == "placa-mãe" || barraPesquisa.value == "placa-mae" || barraPesquisa.value == "placa mae" || barraPesquisa.value == "Placa mae" || barraPesquisa.value == "Placa Mãe" || barraPesquisa.value == "Placa Mae") {
        cardPlacaMae.style.display = "block";
    } else if(barraPesquisa.value == "Placa-de-Video" || barraPesquisa.value == "Placa-de-Video" || barraPesquisa.value == "Placa-de-video" || barraPesquisa.value == "Placa-de-VIDEO" || barraPesquisa.value == "Placa-de-vidEo" || barraPesquisa.value == "Placa-de-VidEo" || barraPesquisa.value == "Placa-de-VIDEo" || barraPesquisa.value == "Placa-de-VIDEO" || barraPesquisa.value == "Placa-video" || barraPesquisa.value == "placa-video") {
        cardPlacaVideo.style.display = "block";
    } else if(barraPesquisa.value == "Memoria Ram" || barraPesquisa.value == "Memoria RAM" || barraPesquisa.value == "Memoria ram" || barraPesquisa.value == "Memoria RAM" || barraPesquisa.value == "memoria ram" || barraPesquisa.value == "memoria RAM") {
        cardMemoriaRam.style.display = "block";
    } else if(barraPesquisa.value == "Armazenamento" || barraPesquisa.value == "armazenamento" || barraPesquisa.value == "ARMAZENAMENTO") {
        cardArmazenamento.style.display = "block";
    } else if(barraPesquisa.value == "Fonte" || barraPesquisa.value == "fonte" || barraPesquisa.value == "FONTE") {
        cardFonte.style.display = "block";
    } else {
        cardProcessador.style.display = "none";
        cardPlacaMae.style.display = "none";
        cardPlacaVideo.style.display = "none";
        cardMemoriaRam.style.display = "none";
        cardArmazenamento.style.display = "none";
        cardFonte.style.display = "none";
    }
}