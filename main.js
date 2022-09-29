const display = document.querySelector('#display')
const valor = document.querySelectorAll('.valor')
const operador = document.querySelector('#operador')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multi = document.getElementById('multi')
const division = document.getElementById('division')
const igual = document.getElementById('igual')
const borrar = document.getElementById('borrar')

igual.addEventListener('click',()=>{
    let a = +valor[0].value
    let b = +valor[1].value    
    if(operador.textContent==='+'){
      display.innerText=b+a
    } else if(operador.textContent==='-'){
        display.innerText=b-a
    }else if(operador.textContent==='*'){
        display.innerText=b*a
    } else if(operador.textContent==='/'){
        display.innerText=b/a
    } else {
        display.innerText='Error'
    }

})

suma.addEventListener('click',()=>{
    operador.textContent='+'
    valor[1].value=valor[0].value
    valor[0].value=''
    
})
resta.addEventListener('click',()=>{
    operador.textContent='-'
    valor[1].value=valor[0].value
    valor[0].value=''
})
multi.addEventListener('click',()=>{
    operador.textContent='*'
    valor[1].value=valor[0].value
    valor[0].value=''
})
division.addEventListener('click',()=>{
    operador.textContent='/'
    valor[1].value=valor[0].value
    valor[0].value=''
})

borrar.addEventListener('click',()=>{
    operador.textContent=''
    display.innerText=''
    valor[0].value=''
})