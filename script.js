let total = 0,
    comida = 0,
    bebida = 0,
    sobremesa = 0,
    ativ = 0,
    comidaativ = 0,
    bebidaativ = 0,
    sobremesaativ = 0,
    cont2 = 0;
let comidanome, bebidanome, sobremesanome,nome,endereço;
var check, checkb, checks;
window.onload = function mudar() {
    let tam = document.getElementsByClassName('prato')
    for (let cont = 0; cont < tam.length; cont++) {
        let item = document.getElementsByClassName('prato')[cont];
        item.addEventListener('click', function () {
            for (let cont1 = 0; cont1 < tam.length; cont1++) {
                tam[cont1].classList.add('semborda')
                tam[cont1].classList.remove('bordaverde','padding')
            }
            if (check !== undefined) check.classList.add('invi')
            item.classList.remove('semborda')
            item.classList.add('bordaverde','padding');

            var novo = document.createElement("ion-icon");
            novo.setAttribute('class', 'check');
            novo.setAttribute('name', 'checkmark-circle');
            check = item.appendChild(novo);
            comidanome = item.id
            switch (item.id) {
                case 'feijoada':
                    comida = 22
                    if (comidaativ < 1) {
                        ativ++;
                        comidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    comidanome = 'Feijoada'
                    break;
                case 'strogonoff':
                    comida = 25
                    if (comidaativ < 1) {
                        ativ++;
                        comidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    comidanome = 'Strogonoff'
                    break;
                case 'bolonhesa':
                    comida = 20
                    if (comidaativ < 1) {
                        ativ++;
                        comidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    comidanome = 'Macarrão à Bolonhesa'
                    break;
                case 'parmegiana':
                    comida = 23
                    if (comidaativ < 1) {
                        ativ++;
                        comidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    comidanome = 'Parmegiana'
                    break;
                case 'escalope':
                    comida = 32
                    if (comidaativ < 1) {
                        ativ++;
                        comidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    comidanome = 'Escalope'
                    break;
            }
            if (ativ == 3) {
                let botaofechar = document.getElementById('botao')
                botaofechar.style.backgroundColor = '#32B72E';
                document.getElementById("text").textContent = "Fechar pedido";
            }
        })
    }

    let bebidatam = document.getElementsByClassName('bebida')
    for (let i = 0; i < bebidatam.length; i++) {
        let item = document.getElementsByClassName('bebida')[i];
        item.addEventListener('click', function () {
            for (let j = 0; j < bebidatam.length; j++) {
                bebidatam[j].classList.add('semborda')
                bebidatam[j].classList.remove('bordaverde','padding')
            }
            if (checkb !== undefined) checkb.classList.add('invi')
            item.classList.remove('semborda');
            item.classList.add('bordaverde','padding');

            var novo = document.createElement("ion-icon");
            novo.setAttribute('class', 'checkb');
            novo.setAttribute('name', 'checkmark-circle');
            checkb = item.appendChild(novo);
            bebidanome = item.id
            switch (item.id) {
                case 'coca':
                    bebida = 5.90
                    if (bebidaativ < 1) {
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    bebidanome = 'Coca-Cola'
                    break;
                case 'fanta':
                    bebida = 5.90
                    if (bebidaativ < 1) {
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    bebidanome = 'Fanta Uva'
                    break;
                case 'guarana':
                    bebida = 5.90
                    if (bebidaativ < 1) {
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    bebidanome = 'Guaraná'
                    break;
                case 'agua':
                    bebida = 3.50
                    if (bebidaativ < 1) {
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    bebidanome = 'Água'
                    break;
                case 'matte':
                    bebida = 4.50
                    if (bebidaativ < 1) {
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida + sobremesa + bebida
                    bebidanome = 'Matte-Leão'
                    break;
            }
            if (ativ == 3) {
                let botaofechar = document.getElementById('botao')
                botaofechar.style.backgroundColor = '#32B72E';
                document.getElementById("text").textContent = "Fechar pedido";
            }
        })
    }

    let sobremesatam = document.getElementsByClassName('sobremesa')
    for (let a = 0; a < sobremesatam.length; a++) {
        let item = document.getElementsByClassName('sobremesa')[a];
        item.addEventListener('click', function () {

            for (let b = 0; b < sobremesatam.length; b++) {
                sobremesatam[b].classList.add('semborda')
                sobremesatam[b].classList.remove('bordaverde','padding')
            }
            if (checks !== undefined) checks.classList.add('invi')
            item.classList.remove('semborda');
            item.classList.add('bordaverde','padding');

            var novo = document.createElement("ion-icon");
            novo.setAttribute('class', 'checks');
            novo.setAttribute('name', 'checkmark-circle');
            checks = item.appendChild(novo);

            switch (item.id) {
                case 'pudim':
                    sobremesa = 7
                    total = comida + sobremesa + bebida
                    if (sobremesaativ < 1) {
                        ativ++;
                        sobremesaativ++;
                    }
                    sobremesanome = 'Pudim'
                    break;
                case 'bolo':
                    sobremesa = 8
                    total = comida + sobremesa + bebida
                    if (sobremesaativ < 1) {
                        ativ++;
                        sobremesaativ++;
                    }
                    sobremesanome = 'Bolo de Pote'
                    break;
                case 'pave':
                    sobremesa = 6
                    total = comida + sobremesa + bebida
                    if (sobremesaativ < 1) {
                        ativ++;
                        sobremesaativ++;
                    }
                    sobremesanome = 'Pavê de Limão'
                    break;
            }
            if (ativ == 3) {
                let botaofechar = document.getElementById('botao')
                botaofechar.style.backgroundColor = '#32B72E';
                document.getElementById("text").textContent = "Fechar pedido";
            }
        })
    }
}

function wpp() {
    if (ativ == 3) {
        let confirm = document.querySelector('.pagamento')
        confirm.classList.remove('invi')
        document.querySelector('#comidanome').innerHTML = `${comidanome}`
        document.querySelector('#comidapreco').innerHTML = `${comida.toFixed(2).replace('.',',')}`
        document.querySelector('#bebidanome').innerHTML = `${bebidanome}`
        document.querySelector('#bebidapreco').innerHTML = `${bebida.toFixed(2).replace('.',',')}`
        document.querySelector('#sobremesanome').innerHTML = `${sobremesanome}`
        document.querySelector('#sobremesapreco').innerHTML = `${sobremesa.toFixed(2).replace('.',',')}`
        document.querySelector('#totalpreco').innerHTML = `<strong>R$ ${total.toFixed(2).replace('.',',')}</strong>`
    }
}

function info() {
    do {
        nome = prompt("Qual é o seu nome?") 
        if ((nome==='' || nome == null)) alert('Insira o nome novamente!')
    } while ((nome==='' || nome == null));
    do {
        endereço = prompt("Qual é o seu endereço?") 
        if ((endereço==='' || endereço == null)) alert('Insira o endereço novamente!')
    } while ((endereço==='' || endereço == null));    

    let uri = `Olá, gostaria de fazer o pedido:\n- Prato: ${comidanome}\n- Bebida: ${bebidanome}\n- Sobremesa: ${sobremesanome}\nTotal: R$${total.toFixed(2)}\n\nNome: ${nome}\nEndereço: ${endereço}`;
    let encoded = encodeURIComponent(uri);
    const a = document.querySelector('#wpp')
    a.setAttribute('href', `https://wa.me/5521981397379?text=${encoded}`)
}

function esconder() {
    let confirm = document.querySelector('.pagamento')
    confirm.classList.add('invi')
}