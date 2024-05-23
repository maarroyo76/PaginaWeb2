$(document).ready(function() {
    let usuarios = []; 

    function ingresarUsuario(nombre, email, password) {
        let usuario = {
            nombre: nombre,
            email: email,
            password: password
        };
        usuarios.push(usuario); 
    }
	ingresarUsuario("Martin", "ma.arroyoq@duocuc.cl", "contraseña1");
	ingresarUsuario("Renato", "re.reinoso@duocuc.cl", "contraseña2");
	ingresarUsuario("Victor", "vic.gallardov@profesor.duoc.cl", "contraseña3");

    function mostrarToast(mensaje) {
        $('.toast-body').text(mensaje);
        $('.toast').toast('show');
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    $("#form").on("submit", function(event) {
        event.preventDefault();

        let nombre = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let confirmarPassword = $("#confirm_password").val().trim();

        if (nombre === "") {
            mostrarToast("El campo de nombre es obligatorio.");
            return;
        }

        if (!validateEmail(email)) {
            mostrarToast("Por favor, introduce un email válido.");
            return;
        }

        if (password.length < 6) {
            mostrarToast("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmarPassword) {
            mostrarToast("Las contraseñas no coinciden.");
            return;
        }

        ingresarUsuario(nombre, email, password);

        $("#form")[0].reset();
        mostrarToast("¡Registro exitoso! Por favor, inicia sesión.");
    });

    $("#loginForm").on("submit", function(event) {
        event.preventDefault(); 

        let email = $("#username").val().trim();
        let password = $("#password").val().trim();

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === email && usuarios[i].password === password) {
                mostrarToast("¡Inicio de sesión exitoso!");
                window.location.href = "Index.html";
                return;
            }
        }
        
        mostrarToast("Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    });
});
