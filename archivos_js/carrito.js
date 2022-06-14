const carrito = JSON.parse (localStorage.getItem ('carrito'));

let tbody = document.querySelector ('#tbody');

function rellenarCarrito (arrayCarrito){
    for (let producto of arrayCarrito) {
        let tr = document.createElement ('tr');
        tr.innerHTML = `<td>${producto.nombre}</td>
                         <td>$${producto.precio}</td>
                         <td>${producto.cantidad}</td>
                         <td>$${producto.subtotal}</td>
                         <td><button id='${producto.id}' class='btn btn-danger eliminarProducto'>Delete</button></td>`;
    tbody.appendChild (tr);
    }
}

rellenarCarrito (carrito);

let botonesEliminar = document.querySelectorAll ('.eliminarProducto');

botonesEliminar.forEach (elemento => {
    elemento.addEventListener ('click', eliminarProducto);
})

function eliminarProducto (e) {
    let index = carrito.findIndex (producto => producto.id == e.target.id);
    
    carrito.splice (index, 1);

    e.target.parentNode.parentNode.remove ();

    localStorage.setItem ('carrito', JSON.stringify (carrito))
}