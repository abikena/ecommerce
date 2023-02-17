const contenedorProductos = document.getElementById("contenedorProductos")



const productos = [
    {id:1, nombre: "bajo pasivo", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:2, nombre: "guitarra eletrica", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:3, nombre: "teclado", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:4, nombre: "saxofon", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:5, nombre: "pandero", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:6, nombre: "bateria", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:7, nombre: "violin", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:8, nombre: "contrabajo", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:9, nombre: "plumilla", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:10, nombre: "amplificador para guitarra", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:11, nombre: "bocina", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1},
    {id:12, nombre: "piano", imagen:"./imagenes/bajo.gif", precio: 10500, cantidad: 1}
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