let ataquejugador
let ataqueEnemigo 
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarjuego(){
    let sectionSeleccionar_ataque = document.getElementById("Seleccionar_ataque")
    sectionSeleccionar_ataque.style.display = "none"
    
    let botonMascotaJugador = document.getElementById('confirmar_Mascota')
    botonMascotaJugador.addEventListener('click', seleccionar_mascota_jugador)
    
    let botonfuego = document.getElementById("boton_fuego")
    botonfuego.addEventListener("click", ataquefuego)
    let botonagua = document.getElementById("boton_agua")
    botonagua.addEventListener("click", ataqueagua)
    let botontierra = document.getElementById("boton_tierra")
    botontierra.addEventListener("click", ataquetierra)

    let sectionreiniciar = document.getElementById("boton_reset")
    sectionreiniciar.style.display = "none"

   

    let resetbutton = document.getElementById("boton_reset")
    resetbutton.addEventListener("click", reiniciarjuego)
}

function seleccionar_mascota_jugador(){
    let sectionSeleccionar_mascota = document.getElementById("Seleccionar_mascota")
    sectionSeleccionar_mascota.style.display = "none"
    
    let sectionSeleccionar_ataque = document.getElementById("Seleccionar_ataque")
    sectionSeleccionar_ataque.style.display = "flex"

    let inputHypodoge = document.getElementById('hypodoge')
    let inputturtnoise = document.getElementById('turtnoise')
    let inputratguey = document.getElementById('ratguey')
    let inputlagstevis = document.getElementById('lagstevis')
    let inputtukpalm = document.getElementById('tukpalm')
    let inputpydos = document.getElementById('pydos')
    let spanmascota_jugador = document.getElementById("mascota_jugador")

    if (inputHypodoge.checked){
        spanmascota_jugador.innerHTML = "hypodoge"
    }
    else if (inputturtnoise.checked){
        spanmascota_jugador.innerHTML = "turtnoise"
    }
    else if (inputratguey.checked){
        spanmascota_jugador.innerHTML = "ratguey"
    }
    else if (inputlagstevis.checked){
        spanmascota_jugador.innerHTML = "lagstevis"
    }
    else if (inputtukpalm.checked){
        spanmascota_jugador.innerHTML = "tukpalm"
    }
    else if (inputpydos.checked){
        spanmascota_jugador.innerHTML = "pydos"
    }
    else {
        alert("DEBES SELECCIONAR UNA MASCOTA")
    }
   

    seleccionar_mascota_enemigo()
}

function seleccionar_mascota_enemigo()
{
    let enemigoleatorio = aleatorio(1,6)
    let spanmascota_enemigo = document.getElementById("mascota_enemigo")

        if (enemigoleatorio == 1){
            spanmascota_enemigo.innerHTML = "hipodoge"
        }
        else if (enemigoleatorio == 2){
            spanmascota_enemigo.innerHTML = "turtnoise"
        }
        else if (enemigoleatorio == 3){
            spanmascota_enemigo.innerHTML = "ratguey"
        }
        else if (enemigoleatorio == 4){
            spanmascota_enemigo.innerHTML = "lagstevis"
        }
        else if (enemigoleatorio == 5){
            spanmascota_enemigo.innerHTML = "tukpalm"
        }
        else {
            spanmascota_enemigo.innerHTML = "pydos" 
        }
}

function ataquefuego(){
    ataquejugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueagua(){
    ataquejugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataquetierra(){
    ataquejugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorioEnemigo = aleatorio(1,3)

        if (ataqueAleatorioEnemigo == 1)
            ataqueEnemigo = "FUEGO"
        
        
        else if (ataqueAleatorioEnemigo == 2)
            ataqueEnemigo = "AGUA"
        

        else 
            ataqueEnemigo = "TIERRA"
        
            combate()
}

function combate(){
    let spanvidasjugador = document.getElementById("vidas_mascota_jugador")
    let spanvidasenemigo = document.getElementById("vidas_mascota_enemigo")

    if(ataqueEnemigo == ataquejugador){
        crearMensaje ("EMPATE")
    }else if(ataquejugador == "FUEGO" && ataqueEnemigo =="TIERRA"){
    crearMensaje ("!!!!!!GANASTE!!!!!")
        vidasEnemigo--
        spanvidasenemigo.innerHTML = vidasEnemigo
    }else if(ataquejugador == "AGUA" && ataqueEnemigo == "FUEGO"){
    crearMensaje ("!!!!!GANASTE!!!!!")
        vidasEnemigo--
        spanvidasenemigo.innerHTML = vidasEnemigo
    }else if(ataquejugador == "TIERRA" && ataqueEnemigo =="AGUA"){
    crearMensaje ("!!!!!GANASTE!!!!!")
        vidasEnemigo--
        spanvidasenemigo.innerHTML = vidasEnemigo
    }else { crearMensaje ("PERDISTE" )

    vidasJugador--
    spanvidasjugador.innerHTML = vidasJugador
   }

   vidas()
}    

    function vidas(){
        if (vidasJugador ==0){
        crearMensajeFinal("PERDISTE. VUELVE A INTENTAR")

    } else if (vidasEnemigo == 0){
        crearMensajeFinal("!!!!!!FELICIDADES GANASTE!!!!!!")
    }
    }  

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function crearMensaje(resultadobatalla){
    let sectionMensaje =  document.getElementById("resultadobatalla")
    let atqsjugador =  document.getElementById("atqsjugador")
    let atqsenemigo =  document.getElementById("atqsenemigo")

    let nuevoatqjugador = document.createElement("p")
    let nuevoatqenemigo = document.createElement("p")

    sectionMensaje.innerHTML = resultadobatalla
    nuevoatqjugador.innerHTML = ataquejugador
    nuevoatqenemigo.innerHTML = ataqueEnemigo
    
    
    atqsjugador.appendChild(nuevoatqjugador)
    atqsenemigo.appendChild(nuevoatqenemigo)
}

function reiniciarjuego(){
    location.reload()
}

function crearMensajeFinal(resultado_final){
    let sectionMensaje =  document.getElementById("mensaje")

    
    sectionMensaje.innerHTML = resultado_final

    
    let botonfuego = document.getElementById("boton_fuego")
    botonfuego.disabled = true
    let botonagua = document.getElementById("boton_agua")
    botonagua.disabled = true
    let botontierra = document.getElementById("boton_tierra")
    botontierra.disabled = true

    let sectionreiniciar = document.getElementById("boton_reset")
    sectionreiniciar.style.display = "block"
    

    }
 



window.addEventListener("load", iniciarjuego)
