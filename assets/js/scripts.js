const total = document.querySelector (".total-section")
const cantidad = document.querySelector (".cantidad")
const sumar = document.querySelector(".sumar")
const restar = document.querySelector(".restar")
console.log (total)
console.log (cantidad)
console.log (sumar)
console.log (restar)

sumar.addEventListener ("click", function(){
    console.log (typeof cantidad.innerHTML)
    console.log (typeof parseInt (cantidad.innerHTML))
    const total_cantidad= parseInt (cantidad.innerHTML)+1
    cantidad.innerHTML = total_cantidad 
    total.innerHTML = 400000 * parseInt (cantidad.innerHTML)
})
restar.addEventListener ("click", function(){
    cantidad.innerHTML = parseInt (cantidad.innerHTML) -1
    total.innerHTML = 400000 * parseInt(cantidad.innerHTML)
})