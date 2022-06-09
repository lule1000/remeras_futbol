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

//PRIMERA FILA PREMIER
let divContainer1 = document.getElementById('primeraFilaPremier');

function cardsProdcutos1(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer1.appendChild(div);

        let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
        carritoLocalStorage && carritoNav (carritoLocalStorage);
    }
}
cardsProdcutos1(primeraFilaPremier);
//SEGUNDA FILA PREMIER
let divContainer2 = document.getElementById('segundaFilaPremier');

function cardsProdcutos2(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer2.appendChild(div);
    }
}
cardsProdcutos2(segundaFilaPremier);

//PRIMERA FILA LA LIGA
let divContainer3 = document.getElementById('primeraFilaLaLiga');

function cardsProdcutos3(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer3.appendChild(div);
    }
}
cardsProdcutos3(primeraFilaLaLiga);
//SEGUNDA FILA LA LIGA
let divContainer4 = document.getElementById('segundaFilaLaLiga');

function cardsProdcutos4(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer4.appendChild(div);
    }
}
cardsProdcutos4(segundaFilaLaLiga);

//PRIMERA FILA UBER EATS
let divContainer5 = document.getElementById('primeraFilaUberEats');

function cardsProdcutos5(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer5.appendChild(div);
    }
}
cardsProdcutos5(primeraFilaUberEats);
//SEGUNDA FILA UBER EATS
let divContainer6 = document.getElementById('segundaFilaUberEats');

function cardsProdcutos6(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer6.appendChild(div);
    }
}
cardsProdcutos6(segundaFilaUberEats);
//PRIMERA FILA SERIE A
let divContainer7 = document.getElementById('primeraFilaSerieA');

function cardsProdcutos7(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer7.appendChild(div);
    }
}
cardsProdcutos7(primeraFilaSerieA);
//SEGUNDA FILA SERIE A
let divContainer8 = document.getElementById('segundaFilaSerieA');

function cardsProdcutos8(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer8.appendChild(div);
    }
}
cardsProdcutos8(segundaFilaSerieA);
//PRIMERA FILA BUNDESLIGA
let divContainer9 = document.getElementById('primeraFilaBundesliga');

function cardsProdcutos9(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer9.appendChild(div);
    }
}
cardsProdcutos9(primeraFilaBundesliga);
//SEGUNDA FILA BUNDESLIGA
let divContainer10 = document.getElementById('segundaFilaBundesliga');

function cardsProdcutos10(arrayProdcutos) {
    for (let producto of arrayProdcutos) {
        let div = document.createElement('div');
        div.classList = 'card col-6 col-md-3 m-md-1 mb-1 mb-md-0'
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                         <div class="card-body">
                            <h5 class="card-title fontCardsTitle overflow-hidden">${producto.nombre}</h5>
                            <p class="card-text fontCardsText">$ <strong>${producto.precio}</strong></p>
                            <button class="btn bgVerde fontCardsTitle anadirAlCarrito">Add to cart</button>
                         </div>`;
        divContainer10.appendChild(div);
    }
}
cardsProdcutos10(segundaFilaBundesliga);



let botones = document.querySelectorAll('.anadirAlCarrito');

botones.forEach(elemento => {
    elemento.addEventListener('click', anadirCarrito);
})

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
        numProductos.innerHTML = `<a class="stickyTop nav-link active text-white"> CART (${totalProductos})</a>`
    }
}

//TERMINA EL CARRITO
