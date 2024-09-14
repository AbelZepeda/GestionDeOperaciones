document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de validación de login
    if (username === "admin" && password === "1234") {
        // Redirigir al formulario de incidencias
        window.location.href = "incidencias.html";
    } else {
        // Mostrar mensaje de error
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
});
