_toggle.onclick = () =>{
    contenido1.classList.toggle("open")
    _toggle.classList.toggle("close")
}

const contenedorProductos = document.getElementById("contenedorProductos")



const productos = [
    {id:1, nombre: "bajo pasivo", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:2, nombre: "guitarra eletrica", imagen:"./imagenes/carrito/guitarra elec.png", precio: 10500, cantidad: 1},
    {id:3, nombre: "teclado", imagen:"./imagenes/carrito/teclado.jpg", precio: 10500, cantidad: 1},
    {id:4, nombre: "saxofon", imagen:"./imagenes/carrito/saxofon.jpg", precio: 10500, cantidad: 1},
    {id:5, nombre: "pandero", imagen:"./imagenes/carrito/pandero.jpg", precio: 10500, cantidad: 1},
    {id:6, nombre: "bateria", imagen:"./imagenes/carrito/bateria.jpg", precio: 10500, cantidad: 1},
    {id:7, nombre: "violin", imagen:"./imagenes/carrito/violin.jpg", precio: 10500, cantidad: 1},
    {id:8, nombre: "contrabajo", imagen:"./imagenes/carrito/contrabajo.jpg", precio: 10500, cantidad: 1},
    {id:9, nombre: "plumilla", imagen:"./imagenes/carrito/plumilla.jfif", precio: 10500, cantidad: 1},
    {id:10, nombre: "amplificador", imagen:"./imagenes/carrito/amplificador.webp", precio: 10500, cantidad: 1},
    {id:11, nombre: "bocina", imagen:"./imagenes/carrito/bocina.png", precio: 10500, cantidad: 1},
    {id:12, nombre: "piano", imagen:"./imagenes/carrito/piano.webp", precio: 10500, cantidad: 1}
]


productos.forEach (item => {
    contenedorProductos.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            <p>PRECIO: $ ${item.precio}</p>
            <button class="btn btn-primary" id="producto${item.id}">AGREGAR AL CARRITO</button>
        </div>
    </div>
    `
})