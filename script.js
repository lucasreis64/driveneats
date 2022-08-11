let total=0,comida=0,bebida=0,sobremesa=0,ativ=0,comidaativ=0,bebidaativ=0,sobremesaativ=0;
window.onload = function mudar(){
    let tam = document.getElementsByClassName('prato')
    for(let cont=0;cont<tam.length;cont++){
        let item = document.getElementsByClassName('prato')[cont];
        item.addEventListener('click', function () {
            for(let cont1=0;cont1<tam.length;cont1++){
                tam[cont1].style.border='0 solid green'
            }
            item.style.border = '3px solid #32B72E'
            switch(item.id){
                case 'feijoada':
                    comida = 22
                    if(comidaativ<1){
                        ativ++;
                        comidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'strogonoff':
                    comida = 25
                    if(comidaativ<1){
                        ativ++;
                        comidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'bolonhesa':
                    comida = 20
                    if(comidaativ<1){
                        ativ++;
                        comidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'parmegiana':
                    comida = 23
                    if(comidaativ<1){
                        ativ++;
                        comidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'escalope':
                    comida = 32
                    if(comidaativ<1){
                        ativ++;
                        comidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
            }
            if(ativ==3){
                let botaofechar = document.getElementById('botao')
                botaofechar.style.backgroundColor='#32B72E';
                document.getElementById("text").textContent="Fechar pedido";
                }
        })  
    }

    let bebidatam = document.getElementsByClassName('bebida')
    for(let i=0;i<bebidatam.length;i++){
        let item = document.getElementsByClassName('bebida')[i];
        item.addEventListener('click', function () {
            for(let j=0;j<bebidatam.length;j++){
                bebidatam[j].style.border='0 solid #32B72E'
            }
            item.style.border = '3px solid green'
            switch(item.id){
                case 'coca':
                    bebida = 5.90
                    if(bebidaativ<1){
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'fanta':
                    bebida = 5.90
                    if(bebidaativ<1){
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'guarana':
                    bebida = 5.90
                    if(bebidaativ<1){
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'agua':
                    bebida = 3.50
                    if(bebidaativ<1){
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
                case 'matte':
                    bebida = 4.50
                    if(bebidaativ<1){
                        ativ++;
                        bebidaativ++;
                    }
                    total = comida+sobremesa+bebida
                    break;
            }
            if(ativ==3){
                let botaofechar = document.getElementById('botao')
                botaofechar.style.backgroundColor='#32B72E';
                document.getElementById("text").textContent="Fechar pedido";
                }
        })  
    }

    let sobremesatam = document.getElementsByClassName('sobremesa')
    for(let a=0;a<sobremesatam.length;a++){
        let item = document.getElementsByClassName('sobremesa')[a];
        item.addEventListener('click', function () {
            for(let b=0;b<sobremesatam.length;b++){
                sobremesatam[b].style.border='0 solid #32B72E'
            }
            item.style.border = '3px solid green'
            switch(item.id){
                case 'pudim':
                    sobremesa = 7
                    total = comida+sobremesa+bebida
                    if(sobremesaativ<1){
                        ativ++;
                        sobremesaativ++;
                    }

                    break;
                case 'bolo':
                    sobremesa = 8
                    total = comida+sobremesa+bebida
                    if(sobremesaativ<1){
                        ativ++;
                        sobremesaativ++;
                    }
                    break;
                case 'pave':
                    sobremesa = 6
                    total = comida+sobremesa+bebida
                    if(sobremesaativ<1){
                        ativ++;
                        sobremesaativ++;
                    }
                    break;
            }
        if(ativ==3){
        let botaofechar = document.getElementById('botao')
        botaofechar.style.backgroundColor='#32B72E';
        document.getElementById("text").textContent="Fechar pedido";
        }
        }) 
    }
}
