
let contador = 0
function add(){
    let precio = parseFloat(document.getElementById('precio').value)
    contador +=1
    cantidad.innerHTML = contador
    valor.innerHTML = contador * precio
}
let precio = 0
function rest(){
    let precio = parseFloat(document.getElementById('precio').value)
    
    if ( contador == 0 ){
        contador = 0
    }
    else{ 
        contador -=1
    }
    cantidad.innerHTML = contador
    valor.innerHTML = contador * precio
}



mas.addEventListener("click", add)
menos.addEventListener("click", rest)

