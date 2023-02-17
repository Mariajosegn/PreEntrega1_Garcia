const productos =[
    {nombre: "Tequeños", precio: 100, stock: 200, vendido:false},
    {nombre: "Mandocas", precio: 150, stock: 180, vendido:false},
    {nombre: "Cachapas", precio: 800, stock: 100, vendido:false},
    {nombre: "Empanadas", precio: 200, stock: 200, vendido:false}
]


const cliente=[]
const compra= []


function datosInicio(){
    let ingresoNombre=prompt("Ingresa tu nombre")
    let ingresoDireccion=prompt("Ingresa la direccion en la que será entregado el pedido (si es edificio, recuerda ingresar el piso")
    if((ingresoNombre != "") && (ingresoDireccion != "")){
        cliente.push(ingresoNombre)
        cliente.push(ingresoDireccion)
        alert("Bienvenido a Mas que Sabor!, su nombre y su direccion fueron registrados respectivamente como: " + cliente.join("\n"))
        }
        else{
            alert("ERROR: recargue la pagina e ingrese los datos solicitados")
        }
}


function menu(){
    alert("A continuacion los productos que conforman nuestro menú")
    let menuProductos= productos.map(productos => productos.nombre + " " + productos.precio +"$")
    alert(menuProductos.join(" - "))
}

let bienvenida=alert("Bienvenido/a a Mas que Sabor")
datosInicio()
if(cliente.length>= 1){

let seleccion= prompt("¿Deseas comenzar la compra? \n si - para comenzar \n 0 - para cancelar")

while(seleccion!="si" && seleccion!="0"){
    alert("Por favor ingresa una opcion válida")
    seleccion= prompt("¿Deseas comenzar la compra? \n si - para comenzar \n 0 - para cancelar")
}

if(seleccion=="si"){
    menu()
} else if(seleccion=="0"){
    alert("Su compra fue cancelada")
}

while (seleccion ==="si"){

let nombreProducto = prompt("ingrese el nombre del producto deseado \ntequeños \nmandocas \ncachapas \nempanadas")
const prodElegido= productos.find(el => el.nombre == nombreProducto)
    switch (nombreProducto) {
        case "tequeños":
            break;
            
        case "mandocas":
            break;
        
        case "cachapas":
            break;
        
        case "empanadas":
            break;
        
        default:
            alert("Opcion inválida")
            break;
    }
    let unidades=parseInt(prompt("Cuantas unidades llevas?"))
    // prodElegido.cantidad = unidades
    // console.log(prodElegido)
    compra.push({prodElegido, unidades})
    seleccion = prompt("¿Deseas continuar la compra? \n si - para elegir otro producto \n 9 - para ver el carrito \n 0 - para cancelar")

while(seleccion==="9"){
        compra.forEach((compraFinal) =>{
            alert(`producto: ${compraFinal.prodElegido.nombre}, unidades: ${compraFinal.unidades} y el total pagar por el producto seleccionado seria ${compraFinal.unidades * compraFinal.prodElegido.precio}`)
            alert("Gracias por preferirnos!")
        })
    }
} 
}

