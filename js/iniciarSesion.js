import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";


const formularioDeInicio = document.getElementById('loginForm')
formularioDeInicio.addEventListener('submit', async (e) => {
    e.preventDefault()
    const emailInput = formularioDeInicio['emailInput'].value
    const passwordInput = formularioDeInicio['passwordInput'].value

    try {
        const credencialesDeUsuario = await signInWithEmailAndPassword(auth, emailInput, passwordInput)
        console.log('usuario logueado')
        showMessage("Holaaaaaa!, bienvenida loca linda");
        window.location.href = "./pages/programa.html";
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña equivocada", "error")
          } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no registrado", "error")
          } else {
            //showMessage("Error al iniciar")
    }
  }
})