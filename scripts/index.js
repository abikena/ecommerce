const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

let stockProductos = [
    {id:1, nombre: "Bajo pasivo", img:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:2, nombre: "Guitarra elétrica", img:"./imagenes/carrito/guitarra.png", precio: 13650, cantidad: 1},
    {id:3, nombre: "Teclado", img:"./imagenes/carrito/teclado.jpg", precio: 11800, cantidad: 1},
    {id:4, nombre: "Saxofón", img:"./imagenes/carrito/saxofon.jpg", precio: 4300, cantidad: 1},
    {id:5, nombre: "Pandero", img:"./imagenes/carrito/pandero.jpg", precio: 1500, cantidad: 1},
    {id:6, nombre: "Batería", img:"./imagenes/carrito/bateria.jpg", precio: 19843, cantidad: 1},
    {id:7, nombre: "Violín", img:"./imagenes/carrito/violin.jpg", precio: 2500, cantidad: 1},
    {id:8, nombre: "Contrabajo", img:"./imagenes/carrito/contrabajo.jpg", precio: 3800, cantidad: 1},
    {id:9, nombre: "Plumilla", img:"./imagenes/carrito/plumilla.jfif", precio: 25, cantidad: 1},
    {id:10, nombre: "Amplificador", img:"./imagenes/carrito/amplificador.webp", precio: 1960, cantidad: 1},
    {id:11, nombre: "Bocina", img:"./imagenes/carrito/bocina.png", precio: 3320, cantidad: 1},
    {id:12, nombre: "Piano", img:"./imagenes/carrito/piano.webp", precio: 9946, cantidad: 1}
]

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito() 
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
