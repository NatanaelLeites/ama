import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
import { auth } from './firebase.js'


const formularioDeInicio = document.getElementById('loginForm')
formularioDeInicio.addEventListener('submit', async (e) => {
    e.preventDefault()
    const emailInput = formularioDeInicio['emailInput'].value
    const passwordInput = formularioDeInicio['passwordInput'].value

    try {
        const credencialesDeUsuario = await signInWithEmailAndPassword(auth, emailInput, passwordInput)
        console.log(credencialesDeUsuario)
    } catch (error) {
        console.log(error)
    }

})