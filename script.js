const entrar =
document.getElementById("entrar")

const entrada =
document.querySelector(".entrada")

const menu =
document.querySelector(".menu")

entrar.onclick=()=>{

entrada.style.display="none"

menu.classList.remove("escondido")

}
