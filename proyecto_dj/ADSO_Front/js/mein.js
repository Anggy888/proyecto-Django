// function submitForm() {
//     const userData = {
//       username: document.getElementById('username').value,
//       email: document.getElementById('email').value,
//       password: document.getElementById('password').value,
//       firstName: document.getElementById('firstName').value,
//       lastName: document.getElementById('lastName').value,
//       birthDate: document.getElementById('birthDate').value
//     };
  
//     console.log("Datos de usuario registrados:", userData);
//     alert("¡Usuario registrado exitosamente!");
//   }

// Variable global para almacenar el token
let userToken = null;

const form = document.getElementById('userForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const biography = document.getElementById('bio').value;

    try {
        // Se realiza una solicitud POST al servidor para registrar un nuevo usuario
        const response = await fetch('http://127.0.0.1:8000/users/sign-up/', {
            method: 'POST',  // Indicamos que la solicitud es de tipo POST (para enviar datos)
            headers: {
                'Content-Type': 'application/json',  // Especificamos que el cuerpo de la solicitud está en formato JSON
            },
            // El cuerpo de la solicitud contiene los datos del nuevo usuario, transformados a formato JSON
            body: JSON.stringify({ username, email, password, firstName, lastName, birthDate, biography })
        });

        // Verificamos si la respuesta del servidor es exitosa (código de estado 2xx)
        if (response.ok) {
            // Si la respuesta fue exitosa, obtenemos los datos del registro
            const data = await response.json();  // Suponiendo que el servidor devuelve un JSON con los detalles del usuario
            
            console.log('¡Registro exitoso!');
            console.log('Detalles del registro:', data);  // Imprimimos los detalles del registro en consola
            
            // Almacenamos el token en la variable global
            userToken = data.token;  // Guardamos el token en la variable global
            
            // Mostrar un mensaje en la interfaz de usuario
            alert('¡Usuario registrado exitosamente! Ahora puedes iniciar sesión.');
            
            // Mostrar detalles adicionales del registro (como token y email) en el DOM
            const detailsDiv = document.getElementById('registrationDetails');
            if (detailsDiv) {
                detailsDiv.innerHTML = `
                    <p><strong>Token:</strong> ${data.token}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                `;
            }

            // Reiniciamos el formulario para que esté listo para un nuevo registro (si es necesario)
            // form.reset();

            console.log('Redirigiendo al login...');
            // Redirigir al formulario de inicio de sesión
            setTimeout(() => {
                location.replace('http://127.0.0.1:5500/proyecto_dj/ADSO_Front/html/login.html');
            }, 1000); // Espera 1 segundo antes de redirigir
            return; // Evita que se ejecuten líneas adicionales después de redirigir
        } else {
            // Si la respuesta no fue exitosa (por ejemplo, error 400, 404, 500), manejamos el error
            const errorData = await response.json();
            console.error('Error en el registro:', errorData);
            alert('Error en el registro: ' + (errorData.message || 'Inténtelo de nuevo.'));
        }


    // Este bloque catch captura errores que ocurran fuera de la solicitud HTTP, como problemas de red
    } catch (error) {
        console.error('Error de red:', error);
        alert('Error de red: Verifique su conexión.');
    }

    // Muestra un spinner mientras se procesa el registro
    const button = form.querySelector('button');
    button.innerHTML = 'Registrando... <span class="spinner-border spinner-border-sm"></span>';
    button.disabled = true;

    // Una vez completado, reestablece el botón
    button.innerHTML = 'Registrar';
    button.disabled = false;

});