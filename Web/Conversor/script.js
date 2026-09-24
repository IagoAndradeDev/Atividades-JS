const moedaAtual = document.querySelector(".moeda-reais select")
const moedaConversao = document.querySelector(".moeda-conversao select")
const valor = document.querySelector(".converter input")
const button = document.querySelector(".converter button")
const resultado = document.querySelector(".real p")
const resultadoConvertido = document.querySelector(".convertido p")
const imagem = document.querySelector(".convertido img")
const nomeMoeda = document.querySelector(".convertido h1")
const dadosConversor = {
    moeda: "",
    valor: 0
}


moedaConversao.addEventListener("change", function(){
    if (moedaConversao.value == "Dolar"){
        dadosConversor.moeda = "Dolar"
        dadosConversor.valor = 5.17
        imagem.src = "eua.png"
        nomeMoeda.innerHTML = "Dolar"
    } else if (moedaConversao.value == "Euro"){
        dadosConversor.moeda = "Euro"
        dadosConversor.valor = 5.88
        imagem.src = "euro.png"
        nomeMoeda.innerHTML = "Euro"
    } else if (moedaConversao.value == "Libra"){
        dadosConversor.moeda = "Libra"
        dadosConversor.valor = 6.86
        imagem.src = "libra.png"
        nomeMoeda.innerHTML = "Libra"
    } else if (moedaConversao.value == "Bitcoin"){
        dadosConversor.moeda = "Bitcoin"
        dadosConversor.valor = 437445.32
        imagem.src = "bitcoin.png"
        nomeMoeda.innerHTML = "Bitcoin"
    }
})

button.addEventListener("click", function() {
    if (valor.value == "") {
        alert("Você ainda não tem valor digitado!")
    } else {
        valor_convertido = valor.value / dadosConversor.valor
        valorInserido = Number(valor.value)
        if (dadosConversor.moeda == "Dolar"){
            resultado.innerHTML = `${valorInserido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            resultadoConvertido.innerHTML = `${valor_convertido.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
        } else if (dadosConversor.moeda == "Euro")  {
            resultado.innerHTML = `${valorInserido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            resultadoConvertido.innerHTML = `${valor_convertido.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`
        } else if (dadosConversor.moeda == "Libra")  {
            resultado.innerHTML = `${valorInserido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            resultadoConvertido.innerHTML = `${valor_convertido.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`
        }  else if (dadosConversor.moeda == "Bitcoin")  {
            resultado.innerHTML = `${valorInserido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            resultadoConvertido.innerHTML = `₿ ${valor_convertido.toLocaleString('pt-BR', { minimumFractionDigits: 8, maximumFractionDigits: 8 })}`
        }
}})