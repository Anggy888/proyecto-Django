// Función para agregar un producto al carrito
function addToCart(productId) {
    alert (`Producto con ID ${productId} agregado al carrito.`);
}

// Lógica para desplazar las tarjetas de productos
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    const container = document.getElementById('productCardsContainer');
    const cardWidth = container.querySelector('.card').offsetWidth;
    if (currentIndex > 0) {
        currentIndex--;
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const container = document.getElementById('productCardsContainer');
    const cardWidth = container.querySelector('.card').offsetWidth;
    currentIndex++;
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const container = document.getElementById('productCardsContainer');
    container.scrollBy({
        left: 320,  // Desplazar a la derecha
        behavior: 'smooth'
    });
});

document.getElementById('prevBtn').addEventListener('click', function() {
    const container = document.getElementById('productCardsContainer');
    container.scrollBy({
        left: -320,  // Desplazar a la izquierda
        behavior: 'smooth'
    });
});

// Función de cierre de sesión
function logout() {
    alert("Cerrando sesión...");
    window.location.href = '/logout';
}

// Función para agregar al carrito
function addToCart(productId) {
    alert(`Producto ${productId} agregado al carrito`);
}
