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
menu()

let seleccion = prompt("Elige de nuestros ricos productos disponibles con sabor venezolano: \n 1 Tequeños \n 2 Mandocas \n 3 Cachapas \n 4 Empanadas \nEscribe 0 para cancelar ") 


while (seleccion !="0"){
    let precioProd=0
    switch (seleccion) {
        case "1":
            precioProd=productos[0].precio
            break;
            
        case "2":
            precioProd=productos[1].precio
            break;
        
        case "3":
            precioProd=productos[2].precio
            break;
        
        case "4":
            precioProd=productos[3].precio
            break;
        
        default:
            alert("Opcion inválida")
            break;
    }
    let unidades=parseInt(prompt("Cuantas unidades llevas?"))
    compra.push({productos, unidades, precioProd})
    seleccion = prompt("Elige de nuestros ricos productos disponibles con sabor venezolano: \n 1 Tequeños \n 2 Mandocas \n 3 Cachapas \n 4 Empanadas \nEscribe 0 para finalizar \n 9 para ver su compra")

    if(seleccion=="9"){
        compra.forEach((compraFinal) =>{
             alert(`producto: ${compraFinal.productos.nombre}, unidades: ${compraFinal.unidades} y el total pagar por cada producto seleccionado seria ${compraFinal.unidades * compraFinal.precioProd}`)
        })
            alert("Gracias por preferirnos!")
            break;
    }
    
}

if(seleccion=="0"){
    ("Su compra fue cancelada")
}
}
