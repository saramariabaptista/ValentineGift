const entrar =
document.getElementById("entrar")

const entrada =
document.querySelector(".entrada")

const menu =
document.querySelector(".menu")

entrar.addEventListener(
"click",

()=>{

entrada.style.display=
"none"

menu.classList.remove(
"escondido"
)

}

)
