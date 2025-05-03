fetch('../productos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(productos => {
        const contenedorProductos = document.getElementById('productos-container');

        productos.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');

            const imagenProducto = document.createElement('img');

            const nombreProducto = document.createElement('h4');
            nombreProducto.textContent = producto.nombre;

            const precioProducto = document.createElement('p');
            precioProducto.textContent = `$${producto.precio}`;

            const agregarProducto = document.createElement('button');
            agregarProducto.textContent = 'Agregar al carrito';


            imagenProducto.src = producto.foto;
            imagenProducto.alt = producto.nombre;

            divProducto.appendChild(imagenProducto);
            divProducto.appendChild(nombreProducto);
            divProducto.appendChild(precioProducto);
            divProducto.appendChild(agregarProducto);
            contenedorProductos.appendChild(divProducto);
        });
    })
    .catch(error => {
        console.error('Hubo un error al cargar los productos:', error);
        const contenedorProductos = document.getElementById('contenedor-productos');
        contenedorProductos.innerHTML = '<p>No se pudieron cargar los productos.</p>';
    });