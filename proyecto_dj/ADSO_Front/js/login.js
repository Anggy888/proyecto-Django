const loginForm = document.getElementById('loginForm');

// Evento submit del formulario de inicio de sesión
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtener valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Realizar solicitud POST al servidor para iniciar sesión
        const response = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }) // Enviar credenciales en formato JSON
        });

        if (response.ok) {
            // Si la solicitud es exitosa, obtener los datos de la respuesta
            const data = await response.json();
            console.log('Inicio de sesión exitoso:', data);

            // Almacenar el token de usuario en la variable global o localStorage
            userToken = data.token;
            localStorage.setItem('userToken', data.token);

            // Mostrar un mensaje y detalles del inicio de sesión en el DOM
            alert('Inicio de sesión exitoso');
            const loginDetails = document.getElementById('loginDetails');
            loginDetails.innerHTML = `
                <p><strong>Bienvenido:</strong> ${data.username}</p>
                <p><strong>Token:</strong> ${data.token}</p>
            `;

            // Redireccionar a otra página (opcional)
            // window.location.href = '/dashboard.html';
        } else {
            // Si el servidor devuelve un error, manejarlo aquí
            const errorData = await response.json();
            console.error('Error en inicio de sesión:', errorData);
            alert('Error en inicio de sesión: ' + (errorData.message || 'Verifique sus credenciales.'));
        }
    } catch (error) {
        console.error('Error de red:', error);
        alert('Error de red: Verifique su conexión.');
    }
});