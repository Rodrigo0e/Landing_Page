const menu = document.getElementById("hamenu")

menu.addEventListener("click", ()=>{
 const link = document.getElementById("links")
 const barras = [...document.querySelectorAll(".barra")]

barras.forEach((el)=> {
    el.classList.toggle("clicado")
})
 
 link.classList.toggle("on")
})

