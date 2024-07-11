let res = document.getElementById('res')
let num = document.getElementById('numero')
let lista = document.getElementById('txt')
let valores = []

//Essas dois de baixo só funcionam quando a função Adicionar() for acionada. Pois nela tem os chamados 
function UmNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

// Principal função
function adicionar(){
    if (UmNumero(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já encontrado na lista')        
    }
    num.value = ''
    num.focus()
}

//Segunda principal
function finalizar(){
    if (valores.length == 0){
        window.alert(`Lista inválida. Digite um numero!`)
    } else{

        let total = valores.length
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior numero apresentado foi ${maior}</p`
        res.innerHTML += `<p> O menor numero apresentado foi ${menor}</p`
        res.innerHTML += `<p>A soma entre os numeros apresentados foi de ${soma}</p>`
        res.innerHTML += `<p>A media entre os numeros foi de ${media}</p>`

    }
}



  
