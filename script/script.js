document.getElementById('botao').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    if(name === ""){
        alert('Preencha seu nome para envair uma mensagem')
    }else{
        const phone = '5514998492576'; // Substitui pelo seu número com DDI + DDD (ex: 55 + 11 + número)
        const message = `Olá, sou ${encodeURIComponent(name)}, vi seu portfólio e tenho interesse em seus serviços!`;
        
        const whatsappURL = `https://wa.me/${phone}?text=${message}`;
        window.open(whatsappURL, '_blank');
    }
});