import { findUser } from "./getApi.js"

const user = await findUser()
console.log(user)
document.getElementById("fullname").innerHTML =
	user.name.first + " " + user.name.last
document.getElementById("image-profile").src = user.picture.large
document.getElementById("location2").innerHTML = user.location.city+"-"+user.location.state
document.getElementById("location3").innerHTML = "CP:"+user.location.postcode
document.getElementById("location").innerHTML = user.location.street.name+" N°" + user.location.street.number
document.getElementById("phone").innerHTML = user.phone
document.getElementById("emailUs").innerHTML = user.email




/**************
/* Animaciones con scroll
***************/
window.addEventListener("scroll", () => {
	progresoScroll()
})

function progresoScroll() {
	let scroll = document.documentElement.scrollTop
	let heightMax =
		document.documentElement.scrollHeight - document.documentElement.clientHeight
	let progresScroll = (scroll / heightMax) * 100
	document.getElementsByClassName("barra")[0].style.width = progresScroll + "%"
	// console.log(progresScroll)
}

//Nos dice cuantos pix nos hemos desplazado desde el principio
let ubicacionInnicial = window.pageXOffset
function menu() {
	let desplazamiento = window.pageXOffset
	if ((ubicacionInnicial = desplazamiento)) {
	} else {
	}
	ubicacionInnicial = desplazamiento
}

const animados = document.querySelectorAll(".animado")

const cargarElemento = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)
	entradas.forEach((entrada) => {
		// console.log(entrada)
		if (entrada.isIntersecting) {
			if (entrada.target.className.includes("anima-titulo")) {
				entrada.target.classList.add("fadeInLeft")
			} else {
				entrada.target.classList.add("fadeInDown")
			}
		}
		// else{
		// entrada.target.classList.remove("fadeInLeft")
		// }
	})
}

const observador = new IntersectionObserver(cargarElemento, {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
})

animados.forEach((element) => {
	observador.observe(element)
})
