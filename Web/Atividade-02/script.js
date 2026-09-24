function mostrarLink() {
    const elementosLinks = document.getElementsByTagName('a')
    
    for (let i = 0; i < elementosLinks.length; i++) {
        elementosLinks[i].onclick = function(event) {
            event.preventDefault();
            alert("Texto do link:", this.textContent);
        };
    }
}

mostrarLink();