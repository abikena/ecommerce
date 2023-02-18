const contenedorProductos = document.getElementById("contenedorProductos");
const contadorCarrito = document.getElementById ("contadorCarrito");
const contador = document.createElement ("p");
const carritoOffcanvas = document.getElementById("carritoOffcanvas");



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

const carritoDeCompras = [];

productos.forEach (item => {
    const div = document.createElement("div");
    div.innerHTML +=
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
    contenedorProductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById (`producto${item.id}`)
    botonAgregarCarrito.addEventListener ("click", ()=> {
        agregarAlCarrito(item.id, carritoDeCompras);
        agregarContadorCarrito();
        mostrarCarrito();
    })
})

const agregarAlCarrito = (productoSeleccionado, carrito)=> {
    const productoElegido = productos.find (producto => producto.id === productoSeleccionado);
    carrito.push (productoElegido);
    console.log ("Se agrego al carrito", carrito);
}

const agregarContadorCarrito = ()=> {
    if (carritoDeCompras.length !== 0){
        contador.textContent = carritoDeCompras.length;
        contador.classList.add("contenedorCarrito");
        contadorCarrito.appendChild(contador);
    }
}

const mostrarCarrito = ()=> {
    carritoDeCompras.forEach(product => {
        const tr = document.createElement("tr");
        tr.innerHTML +=
        `
        <td>
            <img src="${product.imagen}" alt="${product.nombre}">
        </td>
        <td class="infoProducto">Instrumento ${product.nombre}</td>
        <td class="infoProducto">${product.cantidad}</td>
        <td class="infoProducto">${product.precio}</td>
        <td class="infoProducto eliminarProducto">
            <iconify-icon icon="material-symbols:delete-outline" class="deleteIconify" id="eliminar${product.id}"></iconify-icon>
        </td>
        `
        carritoOffcanvas.appendChild(tr);
    })
}