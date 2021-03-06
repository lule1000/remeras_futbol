let carrito = [];

class ProductoCarrito {
    constructor(nombre, precio, imagen, id, subtotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
        this.id = id;
        this.subtotal = precio;
    }
}

const divContainer1 = document.getElementById('primeraFilaPremier');
const divContainer2 = document.getElementById('segundaFilaPremier');
const divContainer3 = document.getElementById('primeraFilaLaLiga');
const divContainer4 = document.getElementById('segundaFilaLaLiga');
const divContainer5 = document.getElementById('primeraFilaUberEats');
const divContainer6 = document.getElementById('segundaFilaUberEats');
const divContainer7 = document.getElementById('primeraFilaSerieA');
const divContainer8 = document.getElementById('segundaFilaSerieA');
const divContainer9 = document.getElementById('primeraFilaBundesliga');
const divContainer10 = document.getElementById('segundaFilaBundesliga');

cargarProductos();

function cargarProductos(){
fetch("./productos.json")
    .then((resp) => resp.json())
    .then((json) => mostrarcarrito(json))

}

function mostrarcarrito(data){
        data.primeraFilaPremier.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer1.appendChild(div);
        });
        data.segundaFilaPremier.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer2.appendChild(div);
        });
        data.primeraFilaLaLiga.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer3.appendChild(div);
        });
        data.segundaFilaLaLiga.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer4.appendChild(div);
        });
        data.primeraFilaUberEats.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer5.appendChild(div);
        });
        data.segundaFilaUberEats.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer6.appendChild(div);
        });
        data.primeraFilaSerieA.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer7.appendChild(div);
        });
        data.segundaFilaSerieA.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer8.appendChild(div);
        });
        data.primeraFilaBundesliga.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer9.appendChild(div);
        });
        data.segundaFilaBundesliga.forEach((producto) => {
            let div = document.createElement('div');
            div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
            div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
            divContainer10.appendChild(div);
        })
	
        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        carritoLocalStorage && carritoNav(carritoLocalStorage);


        //BOTONES ADD TO CART
        let botones = document.querySelectorAll('.anadirAlCarrito');

        botones.forEach(elemento => {
            elemento.addEventListener('click', anadirCarrito);
        });

        function anadirCarrito(e) {
            Toastify({
                text: 'Added to cart',
                duration: 3000,
                gravity: "top",
                className: "notificacion",
                style: {
                    background: '#46e549'
                }
            }).showToast();

            let carritoStorage = JSON.parse(localStorage.getItem('carrito'));

            if (carritoStorage) {
                carrito = carritoStorage;
            }

            let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt);

            let nombre = e.target.parentNode.children[0].textContent;
            let precio = e.target.parentNode.children[1].children[0].textContent;
            let imagen = e.target.parentNode.parentNode.children[0].src;
            let id = e.target.parentNode.parentNode.children[0].alt;

            if (index == -1) {
                const producto = new ProductoCarrito(nombre, precio, imagen, id);
                carrito.push(producto);
            } else {
                carrito[index].cantidad++;
                carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            carritoNav(carrito);
        }

        function carritoNav(arrayCarrito) {
            let numProductos = document.getElementById('cantidadProductos');

            let totalProductos = 0;

            for (producto of arrayCarrito) {
                totalProductos += producto.cantidad;

                numProductos.innerHTML = '';
                numProductos.innerHTML = `<span class='cart-badge'>${totalProductos}</span>`
            }
        }
    }