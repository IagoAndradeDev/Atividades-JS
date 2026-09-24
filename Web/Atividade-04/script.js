function alterarItens() {
    const elementoDivs = document.querySelectorAll(".item")

    elementoDivs[0].innerHTML = "Item Alterado!"

    for (i = 0; i < elementoDivs.length; i++) {
        elementoDivs[i].innerHTML = "Item Alterado!"
        console.log(elementoDivs)    
    }
}