function saludoDireccion () {
let ingresoNombre=prompt("Ingresa tu nombre")
let ingresoDireccion=prompt("Ingresa la direccion en la que será entregado el pedido (si es edificio, recuerda ingresar el apto)")

if ((ingresoNombre != "") && (ingresoDireccion != "")){
    alert("hola "+ ingresoNombre + "!" + "Tu pedido será enviado a: " + ingresoDireccion)
}else{
    alert("ERROR: complete los campos indicados")
}
}

function multiplicar(valor1, valor2){
    let resultado=valor1*valor2;
    return resultado
}

const tequeños= 100
const mandocas= 150
const cachapas= 800
const empanadas= 200
let precioFinal = 0

let bienvenida=alert("Bienvenido/a a Mas que Sabor")
saludoDireccion ()
let seleccion = prompt("Elige de nuestros ricos productos disponibles con sabor venezolano: \n 1 Tequeños \n 2 Mandocas \n 3 Cachapas \n 4 Empanadas \nEscribe 0 para finalizar")


while (seleccion !="0"){
    let precioProd
    switch (seleccion) {
        case "1":
            let cantidadTequeños = parseInt( prompt("ingrese cuantas unidades"))
            if ((cantidadTequeños > 0) && (cantidadTequeños != "")){
                precioProd = multiplicar(cantidadTequeños,tequeños)
                precioFinal = parseInt(precioFinal + precioProd)
            alert("se agregó " + cantidadTequeños + " tequeños y el precio final es $ " + precioFinal)
            }
            else{
                alert("campo invalido, agregue la cantidad o escriba 0 para finalizar")
            }
            break;
            
        case "2":
            let cantidadMandocas = parseInt( prompt("ingrese cuantas unidades"))
            if ((cantidadMandocas > 0) && (cantidadMandocas != "")){
                precioProd = multiplicar(cantidadMandocas,mandocas)
                precioFinal = parseInt(precioFinal + precioProd)
            alert("se agregó " + cantidadMandocas + " mandocas y el precio final es $ " + precioFinal)
                }
                else{
                    alert("campo invalido, agregue la cantidad o escriba 0 para finalizar")
                }
                break;
                

        case "3":
            let cantidadCachapas = parseInt( prompt("Las cachapas son rellena con queso, ingrese cuantas unidades"))
            if ((cantidadCachapas > 0) && (cantidadCachapas != "")){
                precioProd = multiplicar(cantidadCachapas,cachapas)
                precioFinal = parseInt(precioFinal + precioProd)
            alert("se agregó " + cantidadCachapas + " cachapas y el precio final es $ " + precioFinal)
                }
                else{
                    alert("campo invalido, agregue la cantidad o escriba 0 para finalizar")
                }
                break;
            
        case "4":
            let cantidadEmpanadas = parseInt( prompt("Las empanadas son rellenas de carne mechada, ingrese cuantas unidades"))
            if ((cantidadEmpanadas > 0) && (cantidadEmpanadas != "")){
                precioProd = multiplicar(cantidadEmpanadas,empanadas)
                precioFinal = parseInt(precioFinal + precioProd)
            alert("se agregó " + cantidadEmpanadas + " empanadas y el precio final es $ " + precioFinal)
                }
                else{
                    alert("campo invalido, agregue la cantidad o escriba 0 para finalizar")
                }
                break;
            
        default:
            alert("Orden vacia")
            break;
    }
seleccion = prompt("Elige de nuestros ricos productos disponibles con sabor venezolano: \n 1 Tequeños \n 2 Mandocas \n 3 Cachapas \n 4 Empanadas \n Escribe 0 para finalizar");
}

alert("Gracias por preferirnos!")