document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
        .then(response => {

            if (!response.ok) {
                throw new Error('No se pudo obtener datos: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            
            data.forEach(producto => {
                console.log('ID:', producto.id);
                console.log('Código:', producto.codigo);
                console.log('Nombre:', producto.nombre);
                console.log('Precio:', producto.precio);
                console.log('Accesorio:', producto.accesorio);
                console.log('Piedra:', producto.piedra);
                console.log('---');
            });

            data.forEach(producto => {
                const productoElement = document.createElement('div');
                productoElement.classList.add('producto')
                const productosDiv = document.getElementById('productos-list')
                productoElement.innerHTML = `
                <p><strong>ID:</strong> ${producto.id}</p>
                <p><strong>Código:</strong> ${producto.codigo}</p>
                <p><strong>Nombre:</strong> ${producto.nombre}</p>
                <p><strong>Precio:</strong> ${producto.precio}</p>
                <p><strong>Accesorio:</strong> ${producto.accesorio}</p>
                <p><strong>Piedra:</strong> ${producto.piedra}</p>
                `;
                productosDiv.appendChild(productoElement);
            });

        })
        .catch(error => {
            console.error('Error:', error);
        });

});