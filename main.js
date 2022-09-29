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
      display.innerText=b+ +display.innerText
    } else if(operador.textContent==='-'){
        display.innerText=b-display.innerText
    }else if(operador.textContent==='*'){
        display.innerText=b*display.innerText
    } else if(operador.textContent==='/'){
        display.innerText=b/display.innerText
    } else {
        display.innerText='Error'
    }

})

suma.addEventListener('click',()=>{
    operador.textContent='+'
    valor[1].value=display.innerText
    display.innerText=''
    
})
resta.addEventListener('click',()=>{
    operador.textContent='-'
    valor[1].value=display.innerText
    display.innerText=''
})
multi.addEventListener('click',()=>{
    operador.textContent='*'
    valor[1].value=display.innerText
    display.innerText=''
})
division.addEventListener('click',()=>{
    operador.textContent='/'
    valor[1].value=display.innerText
    display.innerText=''
})

borrar.addEventListener('click',()=>{
    operador.textContent=''
    display.innerText=''
    valor[0].value=''
})

for(let i=0;i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',presion)
}

function presion(e){
    display.innerText=display.innerText+e.target.value
}